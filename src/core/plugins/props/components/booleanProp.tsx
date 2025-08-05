import {Box, Checkbox, Flex, Text} from '@sanity/ui'
import {memo} from 'react'

import {force0LineHeight} from '#styles'

import {BooleanPropSchema} from '../types'
import {useProps} from '../useProps'

/** @internal */
export const BooleanProp = memo(function BooleanProp(props: {
  schema: BooleanPropSchema
  value?: boolean
}): React.ReactNode {
  const {schema, value} = props
  const {setPropValue} = useProps()

  return (
    <Flex as="label" padding={3}>
      <Box className={force0LineHeight} marginRight={2}>
        <Checkbox
          checked={value || false}
          onChange={(event) => setPropValue(schema.name, event.currentTarget.checked)}
        />
      </Box>
      <Box paddingY={1}>
        <Text size={1} weight="semibold">
          {schema.name}
        </Text>
      </Box>
    </Flex>
  )
})
