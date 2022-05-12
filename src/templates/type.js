import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { HiOutlineChevronLeft } from 'react-icons/hi'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { H1 } from '../components/typography'
import TypePlan from '../components/type-plan'
import { Spacer } from '../components/atoms'

import types from '../data/types'

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
const AllTypes = styled.div`
   
`
const List = styled.div`
  display: flex;
  flex-direction: column;

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
`

const TypePage = ({ pageContext: { type } }) => (
  <Layout>
    <SEO 
      title={`Планировка ${type} дом на Батальной`}
      description={`Тип ${type} планировки квартиры в доме на Батальной в Калининграде`}
    />
    <Heading>
      <div>
        <StyledLink to="/building/#bytype">
          <HiOutlineChevronLeft />
          <Spacer xw={0.5} />
          Выбор типа
        </StyledLink>
        <Spacer />
        <H1>Планировка {type}</H1>
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
      <TypePlan type={type} />
      <AllTypes>
        Типы:
        <List>
          {types.map(t => (
            <Item key={t} className={type === t ? 'active' : undefined}>
              <Link to={`/type/${t}/`}>{t}</Link>
            </Item>
          ))}
        </List>
      </AllTypes>
    </Container>
  </Layout>
)

export default TypePage