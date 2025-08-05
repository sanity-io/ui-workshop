import {vars} from '@sanity/ui/css'
import {createVar, createViewTransition, globalStyle, style} from '@vanilla-extract/css'
import {calc} from '@vanilla-extract/css-utils'

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

export const forceMinWidth250 = style({
  minWidth: '250px !important',
})
export const forceMinWidth320 = style({
  minWidth: '320px !important',
})
export const force0LineHeight = style({
  lineHeight: '0 !important',
})
export const forceColorInherit = style({
  color: 'inherit !important',
})

export const canvasViewTransition = createViewTransition('canvas')
export const zoom = createVar(
  {
    syntax: '<number>',
    inherits: true,
    initialValue: '1',
  },
  'zoom',
)
export const iframe = style({
  display: 'block',
  border: 0,
  transform: `scale(${zoom})`,
  transformOrigin: '0 0',
  height: calc.divide('100%', zoom),
  width: calc.divide('100%', zoom),
  viewTransitionName: canvasViewTransition,
})

export const viewportMaxWidth = createVar('viewport-max-width')
export const viewportMaxHeight = createVar('viewport-max-height')
export const iframeContainer = style({
  selectors: {
    '&&': {
      maxWidth: calc.multiply(viewportMaxWidth, zoom),
      maxHeight: calc.multiply(viewportMaxHeight, zoom),
    },
  },
})

const workshopAside = style({
  '@media': {
    'screen and (min-width: 600px)': {
      maxWidth: '300px',
      selectors: {
        '&&': {
          minWidth: '180px',
        },
      },
    },
  },
})

export const workshopInspector = style([
  workshopAside,
  {
    '@media': {
      'screen and (min-width: 600px)': {
        borderLeft: `1px solid ${vars.color.border}`,
      },
    },
  },
])

export const workshopNavigator = style([
  workshopAside,
  {
    '@media': {
      'screen and (min-width: 600px)': {
        borderRight: `1px solid ${vars.color.border}`,
      },
    },
  },
])

export const inspectorHeader = style({
  top: 0,
})

export const inspectorHeaderCard = style({
  'lineHeight': 0,
  '@media': {
    'screen and (max-width: 599px)': {
      textAlign: 'center',
    },
  },
})
