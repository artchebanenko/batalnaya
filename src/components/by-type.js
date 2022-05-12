import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { Spacer } from './atoms'

const Container = styled.div`
  flex: 1;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    margin: 15px 30px 15px 0;
  }
`
const K1 = styled.div`
  width: 30%;

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`
const K2 = styled.div`
  width: 40%;

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`
const K3 = styled.div`
  width: 50%;

  @media screen and (max-width: 425px) {
    width: 90%;
  }
`

const ByType = () => (
  <Container id="bytype">
    <h2>Типы планировок</h2>
    <h3>1-комнатные квартиры</h3>
    <Row>
      <K1>
        <Link to="/type/1a/">
          <StaticImage
            src="../images/2-5et/1A1.png"
            alt="Планировка 1a"
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K1>
      <K1>
        <Link to="/type/1b/">
          <StaticImage
            src="../images/2-5et/1B.png"
            alt="Планировка 1b"
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K1>
    </Row>

    <Spacer xh={4} />
    <h3>2-комнатные квартиры</h3>
    <Row>
      <K2>
        <Link to="/type/2b/">
          <StaticImage
            src="../images/2-5et/2B.png"
            alt="Планировка 2b"
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K2>
      <K2>
        <Link to="/type/2c/">
          <StaticImage
            src="../images/6,7et/2C.png"
            alt=""
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K2>
      <K3>
        <Link to="/type/2a/">
          <StaticImage
            src="../images/2-5et/2A.png"
            alt="Планировка 2a"
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K3>
    </Row>

    <Spacer xh={4} />
    <h3>3-комнатные квартиры</h3>
    <Row>
      <K3>
        <Link to="/type/3a/">
          <StaticImage
            src="../images/6,7et/3A.png"
            alt="Планировка 3a"
            objectFit="contain"
            objectPosition="top left"
          />
        </Link>
      </K3>
    </Row>
  </Container>
)

export default ByType