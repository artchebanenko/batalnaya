import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'
import { HiMenuAlt1 } from 'react-icons/hi'
import styled from 'styled-components'

import Contacts from './contacts'
import Menu from './menu'
import { Spacer } from '../atoms'

const Container = styled.header`
  background-color: var(--white);
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1140px; //960px;
  padding: 1.0875rem;
`
const MediaWrapper = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
`

const Logo = styled.div`
  flex: 1;
  font-size: 150%;
`
const Open = styled.button`
  display: block;
  padding: 10px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 500ms ease;
  &:hover {
    background-color: var(--orange);
  }
  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`

const Header = ({ siteTitle }) => {
  const [opened, setOpened] = useState(false)

  const toggleOpen = () => {
    setOpened(opened => !opened)
  }

  return (
    <Container>
      <Wrapper>
        <Open type="button" onClick={toggleOpen}>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <HiMenuAlt1 />
          </IconContext.Provider>
        </Open>
        <Spacer xw={2} />
        <Logo>
          <Link to="/">
            {siteTitle}
          </Link>
        </Logo>
        <Spacer xw={2} />
        <MediaWrapper>
          <Contacts fromHeader />
        </MediaWrapper>
      </Wrapper>

      <Menu opened={opened} toggleOpen={toggleOpen} />
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
