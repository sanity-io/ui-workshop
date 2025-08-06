import {vars} from '@sanity/ui/css'
import {createViewTransition, globalStyle, style} from '@vanilla-extract/css'

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

export const canvasViewTransition = createViewTransition('canvas')

export const iframe = style({
  display: 'block',
  border: 0,
  height: '100%',
  width: '100%',
  transformOrigin: '0 0',
  viewTransitionName: canvasViewTransition,
})

export const workshopInspector = style({
  '@media': {
    'screen and (min-width: 600px)': {
      borderLeft: `1px solid ${vars.color.border}`,
      minWidth: '180px',
      maxWidth: '300px',
    },
  },
})

export const workshopNavigator = style({
  '@media': {
    'screen and (min-width: 600px)': {
      borderRight: `1px solid ${vars.color.border}`,
      minWidth: '180px',
      maxWidth: '300px',
    },
  },
})
