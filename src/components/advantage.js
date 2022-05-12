import React, { useState } from 'react'
import styled from 'styled-components'

import IconHouse from '../icons/icon-house'
import IconBrick from '../icons/icon-brick'
import IconRating from '../icons/icon-rating'
import IconStore from '../icons/icon-store'
import IconMap from '../icons/icon-map'
import IconPuzzle from '../icons/icon-puzzle'

const Container = styled.div`
  width: 240px;

  @media screen and (max-width:1440px) {
    width: 180px;
  }
  @media screen and (max-width:1024px) {
    width: 150px;
  }
  @media screen and (max-width:768px) {
    width: 180px;
  }
  @media screen and (max-width:425px) {
    width: 150px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`

function switchIcon(icon) {
  switch(icon) {
  case 'house':
    return <IconHouse />
  case 'brick':
    return <IconBrick />
  case 'rating':
    return <IconRating />
  case 'store':
    return <IconStore />
  case 'map':
    return <IconMap />
  case 'puzzle':
    return <IconPuzzle />
  }
}

const Advantage = ({ icon, backgroundColor }) => {
  const [hovered, setHovered] = useState(false)

  const iconWithProps = React.cloneElement(
    switchIcon(icon), 
    { 
      hovered, backgroundColor,
    },
  )

  return (
    <Container 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      {iconWithProps}
    </Container>
  )
}

export default Advantage