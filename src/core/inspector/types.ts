import type {ElementTone} from '@sanity/ui/theme'

import {WorkshopPlugin} from '../config'

export interface InspectorTab {
  id: string
  label: React.ReactNode
  plugin: WorkshopPlugin
  tone?: ElementTone
}
