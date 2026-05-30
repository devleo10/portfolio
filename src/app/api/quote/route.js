import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const FALLBACK_QUOTE = {
    quote: 'A journey of a thousand miles begins with a single step, but the right direction matters most.',
    author: 'Lao Tzu',
};

export async function GET() {
    try {
        const apiKey = process.env.API_NINJA_API_KEY;

        if (!apiKey) {
            return NextResponse.json(FALLBACK_QUOTE);
        }

        const response = await fetch('https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom', {
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            return NextResponse.json(data[0]);
        }

        throw new Error('Invalid response format');
    } catch (error) {
        console.error('Quotes API Error:', error);
        return NextResponse.json(FALLBACK_QUOTE);
    }
}
