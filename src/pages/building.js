import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { H1 } from '../components/typography'
import ByFloor from '../components/by-floor'
import ByType from '../components/by-type'
import { Spacer } from '../components/atoms'

const BuildingPage = () => (
  <Layout>
    <SEO 
      title="Планировки и цены квартир дом на Батальной"
      description="Купить квартиру в доме на Батальной в Калининграде, планировки и цены от застройщика Ю-строй"
    />
    <H1>Квартиры</H1>
    <ByFloor />
    <Spacer xh={4} />
    <ByType />
  </Layout>
)

export default BuildingPage