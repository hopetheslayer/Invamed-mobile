import styled from 'styled-components'
import {
  compose,
  color,
  size,
  space,
  borderRadius,
  alignContent,
  alignItems,
  zIndex,
  border
} from 'styled-system'
import { View } from 'react-native'

const Box = styled(View)(
  compose(
    space,
    color,
    size,
    borderRadius,
    alignContent,
    alignItems,
    zIndex,
    border
  )
)

export default Box
