import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SvgMore(props) {
  return (
    <Svg
      width={24}
      height={6}
      viewBox="0 0 24 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        d="M12 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm9 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zM3 0C1.35 0 0 1.35 0 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SvgMore
