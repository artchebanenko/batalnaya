import React from 'react'
import { FaInstagram, FaVk, FaFacebook, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ fromHeader }) => fromHeader && 'flex-end'};
`
const Mobile = styled.div`
  margin-bottom: 10px;
  font-size: 120%;
`
const Socials = styled.div`
  ul {
    margin: 0;
  }

  li {
    display:inline-block;
    margin: 0;
    &:not(:last-of-type) {
      padding-right: 15px;
    }
  }
`

const Contacts = ({ fromHeader }) => (
  <Container fromHeader={fromHeader}>
    <Mobile>
      <a href="tel:+79633519900">
            +7-963-351-9900
      </a>
    </Mobile>
    <Socials>
      <ul>
        <li>
          <a target="_blank" rel="noopener" href="https://www.instagram.com/youstroi_batalnaya/">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://vk.com/youstroi">
            <FaVk />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://www.facebook.com/youstroi/">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCs-9UcW8l38H2JtSygv3gpA">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </Socials>
  </Container>
)

export default Contacts