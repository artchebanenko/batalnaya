import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import UnitPlan from '../components/unit-plan'
import { Spacer } from '../components/atoms'

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const UnitPage = ({ pageContext: { floor, unit } }) => { 
  const [flat, setFlat] = useState()
  useEffect(() => {
    fetch('https://you-stroi.ru/api/houses/15/flats')
      .then(response => response.json())
      .then(data => {
        const obj = data?.items?.find(item => item.number == unit)
        setFlat(obj)
      })
  }, [])
  return (
    <Layout>
      <SEO 
        title={`Квартира ${unit} дом на Батальной`}
        description={`Планировка и цена квартира ${unit} на ${floor} этаже в доме на Батальной в Калининграде`}
      />
      <Heading>
        <div>
          <StyledLink to={`/floor/${floor}/`}>
            <HiOutlineChevronLeft />
            <Spacer xw={0.5} />
          Выбор квартиры
          </StyledLink>
          <Spacer />
          <h2>Этаж {floor} / Квартира {unit}</h2>
        </div>
        <div>
          <StaticImage
            src="../images/wind-rose.png"
            alt="Роза ветров"
            height={150}
            objectFit="contain"
            objectPosition="top left"
          />
        </div>
      </Heading>
      <UnitPlan unit={unit} floor={floor} flat={flat} />
    </Layout>
  ) 
}

export default UnitPage