import { Hono } from 'hono'
import { trimTrailingSlash } from 'hono/trailing-slash'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { showRoutes } from 'hono/dev'
import RateLimiter from './config/RateLimiter'
import ErrorHandler from './config/ErrorHandler'

const app = new Hono()

app.use(trimTrailingSlash(), cors(), logger());
app.use(RateLimiter);

app.notFound((c) => c.json({ message: '404 Not found' }, 404))

app.onError(ErrorHandler);

showRoutes(app, { verbose: process.env.NODE_ENV === 'development' })

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
