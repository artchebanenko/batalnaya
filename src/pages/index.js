import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import { H1, H2 } from '../components/typography'
import SEO from '../components/seo'
import Advantage from '../components/advantage'

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: var(--yellow);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  flex: 1;

  .gatsby-image-wrapper-constrained {
    display: block;
  }
`
const Right = styled.div`
  flex: 1;
  padding: 2rem;
  text-align: center;
  background-color: var(--lavender);
`
const AllAdvantages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  a {
    display: block;
    margin: 20px 0;
  }
`

const HomePage = () => (
  <Layout home>
    <SEO 
      title="Дом на Батальной в Калининграде"
      description="Официальный сайт ЖК Батальная.рф застройщика Ю-строй Калининград"
    />
    <Container>
      <Left>
        <StaticImage
          src="../images/batalnaya1.jpg"
          // width={300}
          quality={95}
          // formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Дом на Батальной - ЖК Батальная.рф"
          style={{ height: '100%' }}
        />
      </Left>
      <Right>
        <H1>Батальная.рф</H1>
        <p>Восьмиэтажный одноподъездый кирпичный дом комфорт-класса с автономным отоплением в Московском районе Калининграда</p>
        
        <br/>
        <H2>Уютно вам, удобно детям!</H2>
        <AllAdvantages>
          <Link to="/about">
            <Advantage icon="house" />
          </Link>
          <Link to="/about">
            <Advantage icon="brick" />
          </Link>
          <Link to="/about">
            <Advantage icon="puzzle" />
          </Link>
          <Link to="/about">
            <Advantage icon="map" />
          </Link>
          <Link to="/about">
            <Advantage icon="store" />
          </Link>
          <Link to="/about">
            <Advantage icon="rating" />
          </Link>
        </AllAdvantages>

        <br/>
        <p>
          <Link to="/about/">Подробнее...</Link>
        </p>
      </Right>
    </Container>
  </Layout>
)

export default HomePage
