import {MoonIcon, SunIcon} from '@sanity/icons'
import {Button} from '@sanity/ui'
import {memo, useCallback} from 'react'

import {startViewTransition} from '../lib/startViewTransition'
import {useWorkshop} from '../useWorkshop'

/** @internal */
export function SchemeMenu(): React.ReactNode {
  const {broadcast, scheme} = useWorkshop()

  const handleToggleScheme = useCallback(() => {
    startViewTransition(() => broadcast({type: 'workshop/toggleScheme'}))
  }, [broadcast])

  return <SchemeMenuView dark={scheme === 'dark'} onToggleScheme={handleToggleScheme} />
}

const SchemeMenuView = memo(function SchemeMenuView(props: {
  dark: boolean
  onToggleScheme: () => void
}) {
  const {dark, onToggleScheme} = props

  return (
    <Button
      fontSize={1}
      icon={dark ? MoonIcon : SunIcon}
      mode="bleed"
      onClick={onToggleScheme}
      padding={2}
    />
  )
})
