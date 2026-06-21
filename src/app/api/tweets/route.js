import { NextResponse } from 'next/server'
import { getRecentTweets, TWITTER_HANDLE } from '@/lib/tweets'

export const revalidate = 3600

export async function GET() {
    try {
        const tweets = await getRecentTweets({ handle: TWITTER_HANDLE, limit: 4 })

        return NextResponse.json({ handle: TWITTER_HANDLE, tweets })
    } catch (error) {
        console.error('Tweets API error:', error)
        return NextResponse.json({ error: 'Failed to fetch tweets' }, { status: 500 })
    }
}
