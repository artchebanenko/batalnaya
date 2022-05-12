import React, { useRef, useState, useEffect } from 'react'
import { Paper } from 'react-raphael'
import styled from 'styled-components'

import switchFloorPlan from '../utils/switchFloorPlan'
import UnitPath from './unit-path'
import units from '../data/units.json'

const Container = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`
const StyledImg = styled.img`
  width: ${({ width }) => width}px;
  max-width: 100%;
`

const FloorPlan = ({ floor, open }) => {
  const ref = useRef(null)
  const initWidth = 950
  const origWidth = 1000
  const [paperWidth, setPaperWidth] = useState(initWidth)
  const [paperHeight, setPaperHeight] = useState(687)
  const [x, setX] = useState(initWidth / origWidth)
  
  useEffect(() => {
    if(ref.current.offsetWidth !== 0 && ref.current.offsetWidth < initWidth) {
      setPaperWidth(ref.current.offsetWidth)
      setPaperHeight(ref.current.offsetHeight)
      setX(ref.current.offsetWidth / origWidth)
    }
  }, [ref])

  const { src, title } = switchFloorPlan(floor, x)

  const [floorUnits, setFloorUnits] = useState(Object.values(units).filter(u => Number(u.floor) === floor))

  useEffect(() => {
    fetch('https://you-stroi.ru/api/houses/15/flats')
      .then(response => response.json())
      .then(data => {
        const floorFlats = data.items.filter(f => Number(f.floor) === floor)
        const mergedUnits = floorUnits.map(u => ({
          ...u,
          // status: floorFlats.find(f => f.number === u.number).status,
          ...floorFlats.find(f => f.number === u.number),
        }))
        setFloorUnits(mergedUnits)
      })
  }, [])
  
  return (
    <Container>
      <StyledImg 
        ref={ref} 
        width={initWidth} 
        src={src} 
        alt={`План ${floor} этажа`} 
      />
      {typeof window !== 'undefined' &&
        <Paper 
          width={paperWidth}
          height={paperHeight}
          container={{ 
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          }
        >
          {
            floorUnits.map(unit => (
              <UnitPath 
                key={unit.number}
                d={switchFloorPlan(Number(unit.floor), x)[`d${unit.type}`]} 
                unit={unit}
              />
            ))
          }
        </Paper>
      }
      <p>{title}</p>
    </Container>
  )
}

export default FloorPlan