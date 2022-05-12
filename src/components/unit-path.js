import React, { useState } from 'react'
import { Path, Raphael } from 'react-raphael'
import { navigate } from 'gatsby'

const UnitPath = ({ d, unit: { number, floor, status } }) => {
  const [hovered, setHovered] = useState(false)
  
  function handleClick() {
    if(hovered) {
      navigate(`/floor/${floor}/unit/${number}`)
    } else {
      setHovered(true)
    }
  }
  
  function handleOver() {
    // console.log(this)
    // this.attr({'fill-opacity': 0.5})
    setHovered(true)
  }
  const handleOut = () => {
    setHovered(false)
  }
  
  const attr_active = {
    'fill': '#ffc895',
    // 'fill-opacity': hovered ? 0.5 : 0,
    'stroke': '#ffc895',
    'stroke-opacity': hovered ? 1 : 0,
    'cursor': 'pointer',
  }
  const attr_sold = {
    'fill': '#febeb5',
    'fill-opacity': 0.5,
    'stroke-opacity': 0,
    'cursor': 'default',
  }
  const attr_reserve = {
    'fill': '#bbbbbb',
    'fill-opacity': 0.5,
    'stroke-opacity': 0,
    'cursor': 'default',
  }
    
  const animate_active = Raphael.animation({
    'fill-opacity': `${hovered ? '0.5' : '0'}`,
  }, 350)
  
  const attr = (status) => {
    switch(status) {
    case 'active': 
      return attr_active
    case 'sold':
      return attr_sold
    case 'reserve':
      return attr_reserve
    default:
      return undefined
    }
  }
  const animate = (status) => {
    switch(status) {
    case 'active': 
      return animate_active
    case 'sold':
    case 'reserve':
    default:
      return undefined
    }
  }
    
  return (
    <Path
      d={d}
      attr={attr(status)}
      mouseover={handleOver}
      mouseout={handleOut}
      mousedown={handleClick}
      animate={animate(status)}
    />
  )
}

export default UnitPath