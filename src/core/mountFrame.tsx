import {CardProvider, StyleTags, usePrefersDark} from '@sanity/ui'
import {buildTheme_v3, ThemeColorSchemeKey} from '@sanity/ui/theme'
import {StrictMode, useMemo, useState} from 'react'
import {createRoot} from 'react-dom/client'

import {WorkshopConfig} from './config'
import {WorkshopFrame} from './frame'
import {globalCss} from './globalCss'
import {RootClassNames} from './RootClassNames'

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
  const theme = useMemo(() => buildTheme_v3({tokens: config.theme}), [config.theme])
  const prefersDark = usePrefersDark()
  const [scheme, setScheme] = useState<ThemeColorSchemeKey>(prefersDark ? 'dark' : 'light')

  return (
    <CardProvider scheme={scheme} tone="transparent">
      <RootClassNames />

      <style precedence="workshop-global">{globalCss}</style>
      <StyleTags theme={theme} />

      <WorkshopFrame config={config} setScheme={setScheme} />
    </CardProvider>
  )
}
