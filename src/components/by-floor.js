import React, { useState, useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Paper } from 'react-raphael'
import styled from 'styled-components'

import FloorPath from '../components/floor-path'

const Container = styled.div`
  flex: 1;
`
const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`

const ByFloor = () => {
  const ref = useRef(null)
  const initWidth = 600
  const origWidth = 1000
  const [paperWidth, setPaperWidth] = useState(initWidth)
  const [paperHeight, setPaperHeight] = useState(initWidth)
  const [x, setX] = useState(initWidth / origWidth)
  
  useEffect(() => {
    if(ref.current.offsetWidth !== 0 && ref.current.offsetWidth < initWidth) {
      setPaperWidth(ref.current.offsetWidth)
      setPaperHeight(ref.current.offsetHeight)
      setX(ref.current.offsetWidth / origWidth)
    }
  }, [ref])

  const d8 = `M${127.5*x} ${392.5*x} L${173.5*x} ${372*x} L${174.5*x} ${332*x} L${581*x} ${139*x} L${613*x} ${175*x} L${721.5*x} ${127.5*x} L${844*x} ${301.5*x} L${861.5*x} ${361.5*x} L${861.5*x} ${389.5*x} L${712*x} ${182.5*x} L${127.5*x} ${425.5*x} Z`
  const d7 = `M${127.5*x} ${426.5*x} L${712*x} ${183.5*x} L${862.5*x} ${391*x} L${864*x} ${464*x} L${713*x} ${286*x} L${126*x} ${495.5*x} Z`
  const d6 = `M${126*x} ${496*x} L${713*x} ${287*x} L${864*x} ${465.5*x} L${865*x} ${540*x} L${714*x} ${391*x} L${125*x} ${565*x} Z`
  const d5 = `M${125*x} ${565.5*x} L${714*x} ${391.5*x} L${865*x} ${541*x} L${866*x} ${608*x} L${715*x} ${496.5*x} L${124.5*x} ${634*x} Z`
  const d4 = `M${124.5*x} ${634.5*x} L${715*x} ${497*x} L${866.5*x} ${608.5*x} L${867*x} ${687.5*x} L${716*x} ${603*x} L${123*x} ${705.5*x} Z`
  const d3 = `M${123*x} ${706.5*x} L${716*x} ${603.5*x} L${865.5*x} ${688.5*x} L${867*x} ${761.5*x} L${717.5*x} ${709.5*x} L${122*x} ${776.5*x} Z`
  const d2 = `M${122*x} ${777*x} L${717.5*x} ${710*x} L${868*x} ${762*x} L${870*x} ${846.5*x} L${717*x} ${819.5*x} L${121*x} ${848*x} Z`
  const d1 = `M${121*x} ${848.5*x} L${718*x} ${820*x} L${870*x} ${847.5*x} L${870*x} ${924*x} L${719*x} ${924*x} L${120*x} ${917*x} z`

  return (
    <Container>
      <h2>Поэтажный выбор</h2>
      <Wrapper ref={ref}>
        <StaticImage
          src="../images/batalnaya1.jpg"
          alt="Выбор квартиры ЖК Батальная.рф"
          width={initWidth}
          quality={95}
          objectFit="contain"
          objectPosition="top left"
          style={{ maxWidth: '100%' }}
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
            <FloorPath d={d8} floor={8} />
            <FloorPath d={d7} floor={7} />
            <FloorPath d={d6} floor={6} />
            <FloorPath d={d5} floor={5} />
            <FloorPath d={d4} floor={4} />
            <FloorPath d={d3} floor={3} />
            <FloorPath d={d2} floor={2} />
            <FloorPath d={d1} floor={1} />
          </Paper>
        }
      </Wrapper>
    </Container>
  )
}

export default ByFloor