import type {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import {InlineConfig} from 'vite'

/** @public */
export interface WorkshopRuntime {
  build?: {
    outDir?: string
  }
  pattern?: string | string[]
  server?: {
    port?: number
  }
  vanillaExtract?: boolean | Parameters<typeof vanillaExtractPlugin>[0]
  vite?: (viteConfig: InlineConfig) => InlineConfig | Promise<InlineConfig>
}
