import '@sanity/ui/css/index.css'

import {Root, usePrefersDark} from '@sanity/ui'
import type {ColorScheme} from '@sanity/ui/theme'
import {startTransition, StrictMode, useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'

import {WorkshopConfig} from './config'
import {createLocationStore} from './location'
import {Workshop} from './Workshop'

/** @beta */
export function mount(options: {config: WorkshopConfig}): void {
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
  const [locationStore] = useState(() => createLocationStore())
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ColorScheme>(prefersDark ? 'dark' : 'light')

  useEffect(() => {
    startTransition(() => setScheme(prefersDark ? 'dark' : 'light'))
  }, [prefersDark])

  return (
    <Root lang="en" scheme={scheme}>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <Workshop
        config={config}
        locationStore={locationStore}
        scheme={scheme}
        onSchemeChange={setScheme}
      />
    </Root>
  )
}
