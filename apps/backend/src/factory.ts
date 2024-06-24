import { createFactory } from 'hono/factory'
import { createTriggerFactory } from '@namesmt/hono-adapter-aws-lambda'
import type { HonoEnv } from '~/types'

export const appFactory = createFactory<HonoEnv>()
export const triggerFactory = createTriggerFactory(appFactory.createApp())
