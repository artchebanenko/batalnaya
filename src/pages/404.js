import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="Страница не найдена" 
    />
    <h1>Страница не найдена</h1>
    <p>
      Перейти <Link className="text" to="/">на главную</Link>
    </p>
  </Layout>
)

export default NotFoundPage
