import Redis from 'ioredis'

type Opts = {
  cache: Redis.Redis,
  key: string
}

export default async function checkDocumentsCache ({ cache, key }: Opts) {
  const query = await cache.get(key)
  const isCached = (query !== null)

  if (isCached) {
    return true
  } else {
    await cache.set(key, 0)
    return false
  }
}
