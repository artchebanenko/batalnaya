import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Map, TypeSelector, Placemark } from 'react-yandex-maps'
import { IconContext } from 'react-icons'
import { IoBusSharp } from 'react-icons/io5'
import { RiBus2Fill, RiBusFill } from 'react-icons/ri'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { Col, Row, Card, Spacer } from '../components/atoms'
import { H1, H2, H3 } from '../components/typography'

const MapWrapper = styled.div`
  height: 400px;
  background-color: var(--white);
`
const Item = styled.div`
  flex: 1;
`
const Line = styled.span`
  display: inline-flex;
  align-items: flex-end;
  margin-right: 20px;

  span {
    margin-left: 10px;
  }
`

const LocationPage = () => (
  <Layout>
    <SEO 
      title="Расположение дома на Батальной, на карте адрес где находится"
      description="Транспорт и инфраструктура локации дома на Батальной, 71в в Калининграде"
    />
    <Col>
      <Row>
        <Card backgroundColor="blue">
          <H1 color="white">Расположение</H1>
          <H2>Калининград, ул. Батальная, 71в</H2>
          <p>
            Кадастровый номер участка:
            <br/>39:15:141309:3194
          </p>
          <Spacer />
          <H2 color="white">Транспорт</H2>
          <H3 color="white">О. Кошевого</H3>
          <p>
            <Line title="Автобусы">
              <IconContext.Provider value={{ size: '1.6em' }}>
                <RiBusFill />
              </IconContext.Provider>
              <span>1, 3</span>
            </Line>
          </p>

          <H3 color="white">Батальная</H3>
          <p>
            <Line title="Автобусы">
              <IconContext.Provider value={{ size: '1.6em' }}>
                <RiBusFill />
              </IconContext.Provider>
              <span>5, 8, 16, 23, 30, 36, 37</span>
            </Line>
            <Line title="Маршрутки">
              <IconContext.Provider value={{ size: '1.4em' }}>
                <RiBus2Fill />
              </IconContext.Provider>
              <span>63, 71</span>
            </Line>
            <Line title="Троллейбус">
              <IconContext.Provider value={{ size: '1.5em' }}>
                <IoBusSharp />
              </IconContext.Provider>
              <span>1</span>
            </Line>
          </p>

          <H3 color="white">Судостроительная</H3>
          <p>
            <Line title="Автобусы">
              <IconContext.Provider value={{ size: '1.6em' }}>
                <RiBusFill />
              </IconContext.Provider>
              <span>30, 39</span>
            </Line>
            <Line title="Маршрутка">
              <IconContext.Provider value={{ size: '1.4em' }}>
                <RiBus2Fill />
              </IconContext.Provider>
              <span>72</span>
            </Line>
          </p>
        </Card>
        <Spacer xw={2} />
        <Card>
          <H2>Инфраструктура</H2>
          <Spacer />
          <H3 color="pink">Детский сад №130</H3>
          <H3 color="link">Школа №29</H3>
          <H3 color="link">Школа №6</H3>
          <H3 color="red">Новый супермаркет SPAR</H3>
          <H3 color="red">Супермаркет "Виктория"</H3>
          <H3 color="blue">Почта</H3>
          <H3 color="red">Универсам "Дешево"</H3>
          <H3 color="red">Универсам "Семья"</H3>
          <H3 color="orange">Спортивный клуб "Альбатрос"</H3>
        </Card>
      </Row>
    </Col>
    <Spacer xh={2} />
    <Col>
      <Card noPadding>
        <MapWrapper>
          <Map 
            width="100%"
            height={400}
            defaultState={{ 
              center: [54.67719797743589,20.50815637610457], 
              zoom: 16,
              controls: ['zoomControl'],
            }}
            modules={['control.ZoomControl']}
          >
            <TypeSelector 
              defaultMapTypes={
                ['yandex#map', 'yandex#satellite', 'yandex#hybrid']
              }
              options={{
                panoramasItemMode: 'off',
              }}
            />
            <Placemark 
              defaultGeometry={[54.6772725837631,20.50868745348951]}
              defaultOptions={{
                preset: 'islands#redCircleDotIcon',
              }}
            />
          </Map>
        </MapWrapper>
      </Card>
    </Col>
    <Spacer xh={2} />
    <Col>
      <Card noPadding>
        <StaticImage
          src="../images/aero.jpg"
          alt="Вид с воздуха ЖК Батальная.рф"
          // height={400}
          quality={95}
          style={{
            width: '100%',
            maxHeight: '600px',
          }}
          objectPosition="0 20%"
        />
      </Card>
    </Col>
    <Spacer xh={2} />
    <Col>
      <Row>
        <Item>
          <H3 color="link">Школа №29</H3>
          <Card noPadding>
            <StaticImage
              src="../images/school29.jpg"
              alt="Школа №29"
              quality={95}
              style={{ 
                width: '100%',
                maxHeight: '400px',
              }}
            />
          </Card>
        </Item>
        <Spacer xw={2} />
        <Item>
          <H3 color="pink">Детский сад №130</H3>
          <Card noPadding>
            <StaticImage
              src="../images/kindergarten130.jpg"
              alt="Детский сад №130"
              quality={95}
              style={{ 
                width: '100%',
                maxHeight: '400px',
              }}
            />
          </Card>
        </Item>
        <Spacer xw={2} />
        <Item>
          <H3 color="orange">Спортивный клуб "Альбатрос"</H3>
          <Card noPadding>
            <StaticImage
              src="../images/sportclub.jpg"
              alt="Спортивный клуб Альбатрос"
              quality={95}
              style={{ 
                width: '100%',
                maxHeight: '400px',
              }}
            />
          </Card>
        </Item>
      </Row>
    </Col>
  </Layout>
)

export default LocationPage