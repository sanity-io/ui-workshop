import {_raf2, useCard} from '@sanity/ui'
import {card, scopeClassName as _} from '@sanity/ui/css'
import {ReactNode, useEffect} from 'react'

export function RootClassNames(props: {element: HTMLElement}): ReactNode {
  const {element} = props
  const {scheme, tone} = useCard()

  useEffect(() => {
    const els = document.querySelectorAll(
      [_('button'), _('card'), _('font')].map((n) => `.${n}`).join(', '),
    )

    // temporarily disable all transitions when the theme changes
    for (const el of els) {
      if (el instanceof HTMLElement) {
        el.style.transition = 'none'
      }
    }

    _raf2(() => {
      document.documentElement.className = card({scheme, tone}) ?? ''

      _raf2(() => {
        for (const el of els) {
          if (el instanceof HTMLElement) {
            el.style.transition = ''
          }
        }
      })
    })

    return () => {
      document.documentElement.className = ''
    }
  }, [element, scheme, tone])

  return null
}
