import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Path } from 'react-raphael'

const FloorPath = ({ d, floor }) => {
  const [hovered, setHovered] = useState(false)
  const handleClick = () => {
    if(hovered) {
      navigate(
        `/floor/${floor}/`,
        {
          state: {
            floor,
          },
        },
      )
    } else {
      setHovered(true)
    }
  }
    
  return (
    <Path
      d={d}
      attr={{
        'fill': '#ffc895',
        'fill-opacity': hovered ? 0.5 : 0,
        'stroke': '#ffc895',
        'stroke-opacity': hovered ? 1 : 0,
        'cursor': 'pointer',
      }}
      mouseover={() => setHovered(true)}
      mouseout={() => setHovered(false)}
      mousedown={handleClick}
    />
  )
}

export default FloorPath