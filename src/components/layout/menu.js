// https://stackoverflow.com/questions/28623446/hover-effect-expand-bottom-border
import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { IconContext } from 'react-icons'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'

import Contacts from './contacts'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 1.45rem;
  height: 100vh;
  background-color: var(--orange);
  transform: ${({ opened }) => opened ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 250ms ease;
  z-index: 10;

  ul {
    margin: 0 0 20px;
    list-style: none;
  }
  li {
    margin-bottom: 20px;
  }
`
const Close = styled.button`
  align-self: flex-end;
  margin-bottom: 20px;
  padding:0;
  color: var(--gray);
  background: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: var(--black);
  }
  &:focus {
    outline: none;
  }

  svg {
    display: block;
  }
`
const Item = styled(Link)`
  display: inline-block;
  &:after {
    display: block;
    content: '';
    padding-bottom: 10px;
    border-bottom: 2px solid var(--gray);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
  &:after {
    transform-origin: 0 50%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`

const Menu = ({ opened, toggleOpen }) => {
  const ref = useRef(null)
  
  useEffect(() => {
    if(opened) {
      document.body.style.overflow = 'hidden'
      
      const handleClickOutside = (event) => {
        if(ref.current && !ref.current.contains(event.target)) {
          toggleOpen()
        }
      }
      const handleHide = (event) => {
        if(event.key === 'Escape') {
          toggleOpen()
        }
      }
      
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleHide)
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleHide)
      }
    } else {
      document.body.style.overflow ='unset'
    }
  }, [opened])
  
  return (
    <Container ref={ref} opened={opened}>
      <Close type="button" onClick={toggleOpen}>
        <IconContext.Provider value={{ size: '1.5em' }}>
          <MdClose />
        </IconContext.Provider>
      </Close>
      <ul>
        <li>
          <Item to="/">Главная</Item>
        </li>
        <li>
          <Item to="/about/">Жилой комплекс</Item>
        </li>
        <li>
          <Item to="/building/">Квартиры</Item>
        </li>
        <li>
          <Item to="/location/">Расположение</Item>
        </li>
        <li>
          <Item to="/developer/">Застройщик</Item>
        </li>
      </ul>
      <Contacts />
    </Container>
  ) 
}

export default Menu