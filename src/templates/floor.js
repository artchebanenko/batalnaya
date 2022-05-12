import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { H1 } from '../components/typography'
import FloorPlan from '../components/floor-plan'
import { Spacer } from '../components/atoms'

import floors from '../data/floors'

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    /* flex-direction: column-reverse; */
  }
`
const AllFloors = styled.div`
   
`
const List = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    margin-top: 2rem;
  }
`
const Item = styled.div`
  margin-top: 15px;

  &.active a {
    background-color: var(--orange);
  }

  a {
    display: block;
    padding: 15px 25px;
    background-color: var(--light-gray);
    border-radius: 5px;
    &:hover {
      background-color: var(--orange);
    }
  }

  @media screen and (max-width: 1024px) {
    display: inline-block;
    margin-top: 0;
    margin-right: 10px;

    a {
      padding: 10px 15px;
    }
  }

  @media screen and (max-width: 425px) {
    margin-right: 5px;
  }
`

const FloorPage = ({ pageContext: { floor } }) => (
  <Layout>
    <SEO 
      title={`Квартиры ${floor} этаж дом на Батальной`}
      description={`Планировки квартир на ${floor} этаже в доме на Батальной в Калининграде`}
    />
    <Heading>
      <div>
        <StyledLink to="/building/">
          <HiOutlineChevronLeft />
          <Spacer xw={0.5} />
          Выбор этажа
        </StyledLink>
        <Spacer />
        <H1>Этаж {floor}</H1>
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
    <Container>
      <FloorPlan floor={floor} />
      <AllFloors>
        Этажи:
        <List>
          {floors.map(f => (
            <Item key={f.floor} className={floor === f.floor ? 'active' : undefined}>
              <Link to={`/floor/${f.floor}/`}>{f.floor}</Link>
            </Item>
          ))}
        </List>
      </AllFloors>
    </Container>
  </Layout>
)

export default FloorPage