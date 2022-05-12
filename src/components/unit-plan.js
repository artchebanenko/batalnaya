import React from 'react'
import styled from 'styled-components'

import switchUnitPlan from '../utils/switchUnitPlan'
import switchUnitStatus from '../utils/switchUnitStatus'
import { Col, Row, Spacer } from '../components/atoms'
import { H2 } from '../components/typography'

import units from '../data/units.json'

const Image = styled.div`
  flex: 1;
  /* height: 70vh; */
  padding: 40px;
  background-color: var(--white);

  img {
    max-width: 100%;
    max-height: 70vh;
  }
`
const Info = styled.div`
  flex: 1;
  padding: 40px;
  background-color: lavender;
`

const Unit = ({ unit, floor, flat }) => {
  const { number, type, rooms } = units[unit]
  
  return (
    <Col>
      <Row>
        <Image>
          <img 
            src={switchUnitPlan(type, floor)} 
            alt={`${rooms}-комнатная квартира ${number} на ${floor} этаже в доме на Батальной`}
          />
        </Image>
        <Info>
          <h1>
            {rooms}-комнатная №{number}
          </h1>
          {flat && 
          <>
            Этаж
            <Spacer />
            <h2>{flat.floor}</h2>
            <Spacer />
            Площадь 
            <Spacer />
            <h2>{flat.space} <small>м<sup>2</sup></small></h2>
            <Spacer />
            Статус 
            <Spacer />
            <H2 color={switchUnitStatus(flat.status).color}>{switchUnitStatus(flat.status).title}</H2>
            {flat.status === 'active' && Number(flat.price) > 0 &&
              <>
                <Spacer />
                Цена
                <Spacer />
                <h2>{Number(flat.price).toLocaleString('ru-RU')} <small>руб.</small></h2>
              </>
            }
          </>
          }
        </Info>
      </Row>
    </Col>
  )
}

export default Unit