import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.footer`
  background-color: var(--white);
`
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1140px; //960;
  padding: 1.45rem 1.0875rem;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`

// const Heading = styled.h5`
//   padding-left: 50%;
// `

const ColToRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-bottom: 1rem;
  }
`
const RowToCol = styled.div`
  flex: 1;
  display: flex;
  
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

  & > div {
    flex: 1;
    padding-right: 1rem;

    span {
      display: inline-block;
    }

    .image {
      height: 170px;
    }

    @media screen and (max-width: 425px) {
      padding: 0;

      a {
        display: flex;

        & > span {
          flex: 1;
          padding-top: 1rem;
          padding-right: 1rem;
        }
      }
    }
  }
`

const Footer = () => (
  <Container>
    <Wrapper>
      <ColToRow>
        <div>
          <StaticImage 
            src="../../images/youstroi-h.jpg" 
            alt="Застройщик Ю-строй"
            width={180}
          />
        </div>
        <div>
          {/* © {new Date().getFullYear()} */}
          <a target="_blank" href="//you-stroi.ru?utm_source=batalnaya">Застройщик "Ю-строй"</a>
          <br/>Калининград
          <br/>ул. Университетская, 2г, офис 500
          <br/>(4012) 99-45-45, +7-963-351-9900
        </div>
      </ColToRow>
      <RowToCol>
        <div>
          <a target="_blank" href="//apfelhaus.you-stroi.ru?utm_source=batalnaya">
            <span className="image">
              <StaticImage 
                src="../../images/apfelhaus.jpg" 
                alt="ЖК АпфельХаус" 
                style={{ height: '100%' }}
              />
            </span>
            <span>
              Жилой комплекс <br/>"АпфельХаус"
            </span>
          </a>
        </div>
        <div>
          <a target="_blank" href="//you-stroi.ru/houses/muhlen?utm_source=batalnaya">
            <span className="image">
              <StaticImage 
                src="../../images/muhlen.jpg" 
                alt="Коттеджи Мюлен"
                style={{ height: '100%' }}
              />
            </span>
            <span>
              Комплекс коттеджей <br/>"Мюлен"
            </span>
          </a>
        </div>
      </RowToCol>
    </Wrapper>
  </Container>
)

export default Footer