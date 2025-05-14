/* eslint-disable @typescript-eslint/no-explicit-any */

import {PartialTokens, Tokens} from '@sanity/ui/theme'
import {ElementType, ReactNode} from 'react'

/** @public */
export interface WorkshopCollection {
  name: string
  title: string
}

/** @public */
export interface WorkshopStory<Options = Record<string, unknown>> {
  name: string
  title: string
  component: ElementType
  options?: Options
}

/** @public */
export interface WorkshopScope {
  name?: string
  title?: string
  stories: WorkshopStory[]
}

/** @public */
export interface WorkshopConfig {
  collections?: WorkshopCollection[]
  features?: {
    navbar?: boolean
  }
  frameUrl?: string
  plugins?: WorkshopPlugin<any>[]
  scopes: WorkshopScope[]
  theme?: PartialTokens<Tokens>
  title?: string
}

/** @public */
export interface WorkshopPlugin<Options = any> {
  name: string
  title: string
  inspector?: ElementType<{options: Options}>
  provider?: ElementType<{children?: ReactNode; options: Options}>
  options?: Options
}
