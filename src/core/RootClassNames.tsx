import {useCard} from '@sanity/ui'
import {card} from '@sanity/ui/css'
import {type ReactNode, useEffect, useRef} from 'react'

export function RootClassNames(): ReactNode {
  const {scheme, tone} = useCard()

  const schemeRef = useRef(scheme)

  useEffect(() => {
    if (schemeRef.current === scheme) {
      document.documentElement.className = card({scheme, tone}) ?? ''
      return
    }

    schemeRef.current = scheme

    document.startViewTransition(() => {
      document.documentElement.className = card({scheme, tone}) ?? ''
    })
  }, [scheme, tone])

  return null
}
