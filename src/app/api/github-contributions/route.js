import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

function getContributionRange() {
    const to = new Date();
    to.setUTCHours(23, 59, 59, 999);

    const from = new Date(to);
    from.setUTCDate(from.getUTCDate() - 364);
    from.setUTCHours(0, 0, 0, 0);

    return {
        from: from.toISOString(),
        to: to.toISOString(),
    };
}

const CALENDAR_FIELDS = `
    totalContributions
    weeks {
        contributionDays {
            contributionCount
            contributionLevel
            date
        }
    }
`;

const COLLECTION_FIELDS = `
    contributionCalendar {
        ${CALENDAR_FIELDS}
    }
    restrictedContributionsCount
    hasAnyRestrictedContributions
`;

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username');

        if (!username) {
            return NextResponse.json({ error: 'username is required' }, { status: 400 });
        }

        const token = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN;

        if (!token) {
            return NextResponse.json({ error: 'GitHub token not configured' }, { status: 500 });
        }

        const { from, to } = getContributionRange();

        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: `
                    query($from: DateTime!, $to: DateTime!) {
                        viewer {
                            login
                            contributionsCollection(from: $from, to: $to) {
                                ${COLLECTION_FIELDS}
                            }
                        }
                        user(login: "${username}") {
                            contributionsCollection(from: $from, to: $to) {
                                ${COLLECTION_FIELDS}
                            }
                        }
                    }
                `,
                variables: { from, to },
            }),
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.errors?.length) {
            throw new Error(data.errors.map((e) => e.message).join(', '));
        }

        const viewerLogin = data?.data?.viewer?.login;
        const viewerCollection = data?.data?.viewer?.contributionsCollection;
        const publicCollection = data?.data?.user?.contributionsCollection;
        const isOwner = viewerLogin?.toLowerCase() === username.toLowerCase();
        const collection = isOwner && viewerCollection ? viewerCollection : publicCollection;
        const calendar = collection?.contributionCalendar;

        if (!calendar) {
            throw new Error('Invalid response from GitHub API');
        }

        const restrictedCount = collection?.restrictedContributionsCount ?? 0;

        return NextResponse.json({
            ...calendar,
            restrictedContributionsCount: restrictedCount,
            hasHiddenContributions: Boolean(collection?.hasAnyRestrictedContributions),
        });
    } catch (error) {
        console.error('GitHub contributions API error:', error);
        return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
    }
}
