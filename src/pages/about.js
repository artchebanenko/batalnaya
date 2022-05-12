import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { H1, H2 } from '../components/typography'
import Advantage from '../components/advantage'
import { Col, Row, Card, Spacer } from '../components/atoms'

const AboutPage = () => (
  <Layout>
    <SEO 
      title="Жилой комплекс на Батальной в Калининграде"
      description="Новостройка комфорт-класса с автономным отоплением в Московском районе Калининграда"
    />
    <Col>
      <Row>
        <Card>
          <H2 color="blue">Жилой комплекс</H2>
          <p>
            Батальная.рф - восьмиэтажный одноподъездый кирпичный дом комфорт-класса 
            с автономным отоплением в Московском районе Калининграда.
          </p>
          <StaticImage
            src="../images/batalnaya4.jpg"
            alt="Ход строительства ЖК Батальная.рф"
            height={300}
            quality={95}
            style={{ width: '100%' }}
            objectPosition="50% 20%"
          />
          <br/><br/>
          <a className="text" target="_blank" href="//you-stroi.ru/houses/batalnaya/stroitelstvo?utm_source=batalnaya">
            Ход строительства &rarr;
          </a>
          <Spacer />
          <a className="text" target="_blank" href="//you-stroi.ru/houses/batalnaya/documents?utm_source=batalnaya">
            Документация &rarr;
          </a>
        </Card>
        <Spacer xw={2} />
        <Card noPadding>
          <StaticImage
            src="../images/batalnaya3.jpg"
            alt="Вид со двора ЖК Батальная.рф"
            quality={95}
            style={{ minHeight: '100%' }}
          />
        </Card>
      </Row>
    </Col>
    <Spacer xh={2} />
    <Col>
      <Card>
        <H1 center color="orange">Уютно вам, удобно детям!</H1>
        <Row>
          <Col>
            <Advantage icon="house" backgroundColor="lavender" />
            <h3>Сомасштабная среда</h3>
            <p>
              Аккуратная точечная застройка, дополняющая облик сложившихся кварталов. 
              Вокруг пятиэтажные дома, детский сад под окнами, школа в двух шагах.
            </p>
            <br/>

            <Advantage icon="puzzle" backgroundColor="pink" />
            <h3>Современное жилье</h3>
            <p>
              Односекционный дом со скатной кровлей.
              Индивидуальное автономное отопление, эргономичные планировки, 
              санузлы с окнами, кладовые.
            </p>
            <br/>

            <Advantage icon="store" backgroundColor="yellow" />
            <h3>Полноценная инфраструктура</h3>
            <p>
              Все необходимое в шаговой доступности: школа, детский сад, почта, спортивный клуб,
              большой выбор магазинов у дома, супермаркеты.
            </p>
          </Col>
          <Spacer xw={2} />
          <Col>
            <Advantage icon="brick" backgroundColor="pink" />
            <h3>Экологичные материалы</h3>
            <p>
              Основной строительный материал - керамический кирпич.
              Утепление стен делается полностью каменной ватой,
              устанавливаются хорошие окна и двери.
            </p>
            <br/>

            <Advantage icon="map" backgroundColor="yellow" />
            <h3>Транспортная доступность</h3>
            <p>
              Одинаково близко до нескольких транспортных путей,
              остановки с большим количеством безпересадочных маршрутов в разные части города.
            </p>
            <br/>

            <Advantage icon="rating" backgroundColor="lavender" />
            <h3>Надежный застройщик</h3>
            <p>
              Застройщик с надежной репутацией и реноме качественной строительной компании,
              авторские штучные проекты с продуманными решениями.
            </p>
          </Col>
        </Row>
      </Card>
    </Col>
    <Spacer xh={2} />
    <Col>
      <Row>
        <Card noPadding>
          <StaticImage
            src="../images/batalnaya2.jpg"
            alt="Вид с улицы ЖК Батальная.рф"
            quality={95}
            style={{ minHeight: '100%' }}
          />
        </Card>
        <Spacer xw={2} />
        <Card backgroundColor="pink">
          <H2 color="white">Квартиры с отделкой</H2>
          <p>
            Возможно заказать отделку квартиры у застройщика после покупки.
          </p>
          <p>
            Ремонт выполняется по согласованному с собственником проекту, проработанному вместе с дизайнером.
          </p>
        </Card>
      </Row>
    </Col>
  </Layout>
)

export default AboutPage
