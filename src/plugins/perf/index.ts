export type {PerfContextValue} from './PerfContext'

import {WorkshopPlugin} from '../../types'
import {PerfInspector} from './PerfInspector'
import {PerfProvider} from './PerfProvider'

export * from './hooks'
export * from './types'

/** @internal */
export function perfPlugin(): WorkshopPlugin {
  return {
    name: 'perf',
    title: 'Performance',
    inspector: PerfInspector,
    provider: PerfProvider,
  }
}
