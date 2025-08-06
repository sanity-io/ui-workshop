/* eslint-disable @typescript-eslint/no-explicit-any */
import {Box, Card, Flex, TabPanel} from '@sanity/ui'
import type {Display, ResponsiveProp} from '@sanity/ui/css'
import {ElementType, memo, useState} from 'react'
import {styled} from 'styled-components'

import {EMPTY_RECORD} from '../constants'
import {useWorkshop} from '../useWorkshop'
import {InspectorHeader} from './InspectorHeader'
import {InspectorTab} from './types'

const Root = styled(Card)`
  @media screen and (min-width: 600px) {
    border-left: 1px solid var(--card-border-color);
    min-width: 180px;
    max-width: 300px;
  }
`

const MemoRender = memo(function MemoRender(props: {component: ElementType; options: any}) {
  const {component: Component, options} = props
  return <Component options={options} />
})

/** @internal */
export const WorkshopInspector = memo(function WorkshopInspector(props: {
  expanded: boolean
}): React.ReactNode {
  const {expanded} = props
  const {plugins} = useWorkshop()

  const tabs: InspectorTab[] = plugins
    .filter((plugin) => plugin.inspector)
    .map((plugin) => {
      return {
        id: plugin.name,
        label: plugin.title,
        tone: undefined,
        plugin,
      }
    })

  const [tabId, setTabId] = useState<string | null>(tabs.length > 0 ? tabs[0].id : null)
  const currentTab = tabs.find((tab) => tab.id === tabId)
  const showTabs = tabs.length > 1

  const display: ResponsiveProp<Display> = expanded ? ['block'] : ['none', 'none', 'block']

  return (
    <Root display={display} flex={1} overflow={['hidden', 'hidden', 'auto']}>
      <Flex direction="column" height="fill">
        {showTabs && <InspectorHeader currentTabId={tabId} onTabChange={setTabId} tabs={tabs} />}

        {showTabs &&
          tabs.map((tab) => (
            <TabPanel
              aria-labelledby={`${tab.id}-tab`}
              flex={1}
              hidden={tab.id !== tabId}
              id={`${tab.id}-panel`}
              key={tab.id}
              overflow="auto"
            >
              {tab.plugin.inspector && (
                <MemoRender
                  component={tab.plugin.inspector}
                  options={tab.plugin.options || EMPTY_RECORD}
                />
              )}
            </TabPanel>
          ))}

        {!showTabs && currentTab?.plugin.inspector && (
          <Box flex={1} overflow="auto">
            <MemoRender
              component={currentTab.plugin.inspector}
              options={currentTab.plugin.options || EMPTY_RECORD}
            />
          </Box>
        )}
      </Flex>
    </Root>
  )
})
