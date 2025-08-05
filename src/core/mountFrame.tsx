import '@sanity/ui/css/index.css'

import {Root, usePrefersDark} from '@sanity/ui'
import type {ColorScheme} from '@sanity/ui/theme'
import {StrictMode, useState} from 'react'
import {createRoot} from 'react-dom/client'

import {WorkshopConfig} from './config'
import {WorkshopFrame} from './frame'

/** @beta */
export function mountFrame(options: {config: WorkshopConfig}): void {
  const {config} = options

  const root = createRoot(document)

  root.render(
    <StrictMode>
      <App config={config} />
    </StrictMode>,
  )
}

function App(props: {config: WorkshopConfig}) {
  const {config} = props
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ColorScheme>(prefersDark ? 'dark' : 'light')

  return (
    <Root lang="en" scheme={scheme}>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <WorkshopFrame config={config} setScheme={setScheme} />
    </Root>
  )
}
