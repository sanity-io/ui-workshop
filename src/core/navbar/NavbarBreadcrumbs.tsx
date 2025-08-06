import {Breadcrumbs, Text} from '@sanity/ui'
import {memo, useCallback} from 'react'

import {forceColorInherit} from '#styles'

import {useWorkshop} from '../useWorkshop'

/** @internal */
export function NavbarBreadcrumbs(): React.ReactNode {
  const {broadcast, scope, story, title} = useWorkshop()

  const handleHomeClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      broadcast({type: 'workshop/setPath', value: '/'})
    },
    [broadcast],
  )

  return (
    <NavbarBreadcrumbsView
      onHomeClick={handleHomeClick}
      scopeTitle={scope?.title}
      storyTitle={story?.title}
      title={title}
    />
  )
}

const NavbarBreadcrumbsView = memo(function NavbarBreadcrumbsView(props: {
  onHomeClick: (event: React.MouseEvent) => void
  scopeTitle?: string
  storyTitle?: string
  title: string
}) {
  const {onHomeClick, scopeTitle, storyTitle, title} = props

  return (
    <Breadcrumbs
      separator={
        <Text muted size={[2, 2, 1]}>
          /
        </Text>
      }
      gap={2}
    >
      <Text size={[2, 2, 1]} weight="bold">
        <a className={forceColorInherit} href="/" onClick={onHomeClick}>
          {title}
        </a>
      </Text>

      {scopeTitle && (
        <Text align="center" size={[2, 2, 1]}>
          {scopeTitle}
        </Text>
      )}

      {storyTitle && <Text size={[2, 2, 1]}>{storyTitle}</Text>}
    </Breadcrumbs>
  )
})
