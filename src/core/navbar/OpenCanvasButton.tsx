import {LaunchIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {memo, useMemo} from 'react'

import {buildFrameUrl} from '../helpers'
import {useWorkshop} from '../useWorkshop'

/** @internal */
export const OpenCanvasButton = memo(function OpenCanvasButton() {
  const {frameUrl, path, payload, scheme, zoom, viewport} = useWorkshop()

  const canvasUrl = useMemo(
    () =>
      path === '/'
        ? undefined
        : buildFrameUrl({baseUrl: frameUrl, path, payload, scheme, zoom, viewport}),
    [frameUrl, path, payload, scheme, zoom, viewport],
  )

  const fontSize = 1
  const iconRight = LaunchIcon
  const mode = 'ghost'
  const padding = 2
  const text = 'Open story'
  return canvasUrl ? (
    <Button
      as="a"
      href={canvasUrl}
      rel="noopener noreferrer"
      target="_blank"
      fontSize={fontSize}
      iconRight={iconRight}
      mode={mode}
      padding={padding}
      text={text}
    />
  ) : (
    <Button
      as="button"
      disabled
      fontSize={fontSize}
      iconRight={iconRight}
      mode={mode}
      padding={padding}
      text={text}
    />
  )
})
