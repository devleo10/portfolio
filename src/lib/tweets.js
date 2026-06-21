import { getTweet } from 'react-tweet/api'

export const TWITTER_HANDLE = '_devleo10'

/** Shown when TWITTER_BEARER_TOKEN is not set — update with recent tweet IDs. */
export const FALLBACK_TWEET_IDS = [
    '2068627467984863392',
    '2067897078060355988',
    '2067076701268631950',
]

function toTweetSummary(tweet) {
    if (!tweet?.id_str || !tweet?.text) return null

    const handle = tweet.user?.screen_name ?? TWITTER_HANDLE

    return {
        id: tweet.id_str,
        text: tweet.text,
        createdAt: tweet.created_at,
        url: `https://x.com/${handle}/status/${tweet.id_str}`,
    }
}

async function fetchFromTwitterApi(handle, limit = 4) {
    const bearer = process.env.TWITTER_BEARER_TOKEN
    if (!bearer) return null

    const userRes = await fetch(
        `https://api.twitter.com/2/users/by/username/${handle}?user.fields=username`,
        {
            headers: { Authorization: `Bearer ${bearer}` },
            next: { revalidate: 3600 },
        },
    )

    if (!userRes.ok) return null

    const userData = await userRes.json()
    const userId = userData.data?.id
    if (!userId) return null

    const tweetsRes = await fetch(
        `https://api.twitter.com/2/users/${userId}/tweets?max_results=${Math.min(limit, 10)}&exclude=retweets,replies&tweet.fields=created_at`,
        {
            headers: { Authorization: `Bearer ${bearer}` },
            next: { revalidate: 3600 },
        },
    )

    if (!tweetsRes.ok) return null

    const tweetsData = await tweetsRes.json()
    const tweets = tweetsData.data ?? []

    return tweets.map((tweet) => ({
        id: tweet.id,
        text: tweet.text,
        createdAt: tweet.created_at,
        url: `https://x.com/${handle}/status/${tweet.id}`,
    }))
}

async function fetchFromSyndication(ids) {
    const results = await Promise.all(
        ids.map(async (id) => {
            try {
                const tweet = await getTweet(id)
                return toTweetSummary(tweet)
            } catch {
                return null
            }
        }),
    )

    return results.filter(Boolean)
}

export async function getRecentTweets({ handle = TWITTER_HANDLE, limit = 4 } = {}) {
    const fromApi = await fetchFromTwitterApi(handle, limit)
    if (fromApi?.length) return fromApi.slice(0, limit)

    const ids = FALLBACK_TWEET_IDS.slice(0, limit)
    return fetchFromSyndication(ids)
}
