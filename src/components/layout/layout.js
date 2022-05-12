import * as React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import GlobalStyle from './global-style'
import './layout.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Main = styled.main`
  flex: 1;
  ${({ home }) => !home && `
    margin: 1.45rem auto;
    padding: 0 1.0875rem 1.45rem;
    width: 100%;
    max-width: 1140px;
  `}
`

const Layout = ({ home, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <Container className="content">
        <Main home={home}>
          {children}
        </Main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
