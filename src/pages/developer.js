import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Map, TypeSelector, Placemark } from 'react-yandex-maps'
import styled from 'styled-components'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { Col, Row, Card, Spacer } from '../components/atoms'

import { H1, H2, H3 } from '../components/typography'

const MapWrapper = styled.div`
  height: 400px;
  background-color: var(--white);
`
const Info = styled.div`
  padding: 30px;
`

const DeveloperPage = () => (
  <Layout>
    <SEO 
      title="Застройщик Ю-строй - отдел продаж дома на Батальной в Калининграде"
      description="Специализированный застройщик СЗ А-ПЛЮС Калининград, ИНН 3906135595"
    />
    <Col>
      <Row>
        <Card>
          <StaticImage 
            src="../images/youstroi-v.png"
            alt="Застройщик Ю-строй Калининград"
            style={{ width: '40%' }}
          />
          <Spacer xh={2} />
          <H1>Застройщик "Ю-строй"</H1>
          <p>
            Наши дома выражают долголетнюю надёжность и комфорт, а также гармонично дополняют городской ландшафт. 
            Работу над проектами мы доверяем ведущим архитектурным мастерским, уделяя повышенное внимание функциональным и внешним характеристикам дома. 
            В строительстве используем только качественные материалы и современное оборудование, 
            скурпулезно контролируем все этапы работ и строим, как для себя.
          </p>
          <a className="text" target="_blank" href="//you-stroi.ru?utm_source=batalnaya">Официальный сайт &rarr;</a>
        </Card>
        <Spacer xw={2} />
        <Card backgroundColor="pink">
          <H2 color="white">Контакты</H2>
          <p>
            Калининград
            <br/>ул. Университеская, 2г, офис 500
            <br/>БЦ "Юбилейный", 5 этаж
          </p>
          <p>
            Отдел продаж:
            <br/>(4012) 99-45-45
            <br/>+7-963-351-9900
          </p>
          <Spacer />
          {/* <H2 color="white">Заказчик</H2> */}
          <h3>ООО СЗ "А-ПЛЮС"</h3>
          <p>
            ООО Специализированный застройщик "А-ПЛЮС"
            <br/>Продажа квартир через счет эскроу
          </p>
          <p>
          Калининград, ул. Университетская, 2г
            <br/>ИНН 3906135595
            <br/>ОГРН 1053902841728
          </p>
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
              center: [54.71452135790608, 20.508269021258215], 
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
              defaultGeometry={[54.71452135790608, 20.508269021258215]}
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
      <H2>Реализованные проекты</H2>
      <Row>
        <Card noPadding>
          <StaticImage
            src="../images/alyabeva.jpg"
            alt="Дом на Алябьева в Калининграде"
            quality={95}
            style={{ 
              width: '100%',
              maxHeight: '400px',
            }}
          />
          <Info>
            <H3>Дом на Алябьева</H3>
            <p>
            Дом бизнес-класса занимает особое положение среди всех новостроек Калининграда, 
            построен на тихой зеленой улице в 5 минутах от центра города с применением эксклюзивных решений и материалов.
            </p>
          </Info>
        </Card>
        <Spacer xw={2} />
        <Card noPadding>
          <StaticImage
            src="../images/kurortnyi.jpg"
            alt="Дом на Курортном проспекте в Зеленоградске"
            quality={95}
            style={{ 
              width: '100%',
              maxHeight: '400px',
            }}
          />
          <Info>
            <H3>Дом на Курортном</H3>
            <p>
              Дом в сердце королевского курорта, Зеленоградска, на пешеходном проспекте, в котором соединились 
              традиции и природные условия, достижения технологий и современные представления о комфорте.
            </p>
          </Info>
        </Card>
        <Spacer xw={2} />
        <Card noPadding>
          <StaticImage
            src="../images/moskovskaya.jpg"
            alt="Дом на Московской в Зеленоградске"
            quality={95}
            style={{ 
              width: '100%',
              maxHeight: '400px',
            }}
          />
          <Info>
            <H3>Дом на Московской</H3>
            <p>
              Малоквартирный жилой дом с авторской архитектурой и вместительной приватной территорией 
              в Зеленоградске — городе-курорте с богатой историей и достойным будущим.
            </p>
          </Info>
        </Card>
      </Row>
    </Col>
  </Layout>
)

export default DeveloperPage