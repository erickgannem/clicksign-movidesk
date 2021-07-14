import Redis from 'ioredis'
import { logger as log } from '@utils/logger'

const { REDIS_URL, NODE_ENV } = process.env

const cache: Redis.Redis = NODE_ENV === 'prod'
  ? new Redis(REDIS_URL)
  : new Redis()

cache.on('connect', function () {
  log({
    status: 'OK',
    message: 'Redis connected',
    from: '@src/cache/index.ts'
  })
})
cache.on('ready', function () {
  log({
    status: 'OK',
    message: 'Redis is READY',
    from: '@src/cache/index.ts'
  })
})
cache.on('reconnecting', function () {
  log({
    status: 'OK',
    message: 'Redis is RECONNECTING',
    from: '@src/cache/index.ts'
  })
})
cache.on('error', function () {
  log({
    status: 'ERROR',
    message: 'Redis cannot connect. Trying again...',
    from: '@src/cache/index.ts'
  })
  cache.connect()
})

export default cache
