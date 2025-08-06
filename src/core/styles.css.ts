import {vars} from '@sanity/ui/css'
import {globalStyle, style} from '@vanilla-extract/css'

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  textSizeAdjust: '100%',
  WebkitTapHighlightColor: 'transparent',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('html, body', {
  height: '100%',
  margin: 0,
})

globalStyle('body', {
  backgroundColor: vars.color.bg,
  overflow: 'hidden',
})

export const forceMinWidth320 = style({
  minWidth: '320px !important',
})
