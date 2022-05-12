import React from 'react'
import styled from 'styled-components'

import { Spacer } from './atoms'
import switchTypePlan from '../utils/switchTypePlan'

const Container = styled.div`
`

const Wrapper = styled.div`
  width: 50%;

  @media screen and (max-width:768px) {
    width: 75%;
  }

  @media screen and (max-width:425px) {
    width: 100%;
  }
`

const Plan = styled.div`
`

const StyledImg = styled.img`
  max-width: 90%;
`

const TypePlan = ({ type }) => (
  <Container>
    <Wrapper>
      <StyledImg src={switchTypePlan(type).src} alt={`Планировка ${type}`} />
    </Wrapper>
    <Spacer xh={2} />
    {switchTypePlan(type).onfloor.map(({src, title}, i) => (
      <Plan key={i}>
        <h2>{title}</h2>
        <StyledImg src={src} alt={title} />
        <Spacer xh={2} />
      </Plan>
    ))
    }
  </Container>
)

export default TypePlan