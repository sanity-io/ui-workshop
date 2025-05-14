import {CardProvider, usePrefersDark} from '@sanity/ui'
import {ThemeColorSchemeKey} from '@sanity/ui/theme'
import {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'

import {WorkshopConfig} from './config'
import {WorkshopFrame} from './frame'
import {GlobalStyle} from './GlobalStyle'

/** @beta */
export function mountFrame(options: {config: WorkshopConfig; element: HTMLElement | null}): void {
  const {config, element} = options

  if (!element) throw new Error('missing element')

  const root = createRoot(element)

  root.render(
    <StrictMode>
      <Root config={config} />
    </StrictMode>,
  )
}

function Root(props: {config: WorkshopConfig}) {
  const {config} = props
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>(prefersDark ? 'dark' : 'light')

  return (
    <CardProvider scheme={scheme} tone="transparent">
      <GlobalStyle />
      <WorkshopFrame config={config} setScheme={setScheme} />
    </CardProvider>
  )
}
