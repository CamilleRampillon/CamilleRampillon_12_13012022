import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors';
import { useState } from 'react';

/**
 * CSS for the component using styled.components
 */
const HamburgerWrapper = styled.div`
  display: none;
  z-index: 6;
    @media (max-width: 600px){
      display:fixed;
    }
`;

const StyledMenu = styled.nav`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 27px;
justify-items: center;
background: ${colors.secondary};
width: 100%;
height: 65px;
  opacity: ${({ open }) => open ? '1' : '0'};
  transition: opacity 0.6s ease-in-out;
  position: relative;
  z-index: 10;
`;

const LINK = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color:  ${colors.tertiary};
  padding: 5px;
  transition: color 0.3s linear;
  font-size: clamp(1rem, 1.667vw, 1.5rem);
    &:hover {
        color: ${colors.primary};
      }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: 36px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  }
  div {
    width: 1.5rem;
    height: 0.2rem;
    background: ${colors.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

/**
 *  Component renders a 'Hamburger' icon for the navigation menu 
 *  when the screen width is less than 600px
 *  'StyledBurger' animates from a Hamburger icon (closed menu) to an 'X' icon (menu open)
 * 
 * @function BurgerNav
 * @returns {JSX}
 */
 export function BurgerNav() {
  const [open, setOpen] = useState(false);
  return (
    <HamburgerWrapper>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>

        <StyledMenu open={open}>
            <LINK to="/">Accueil</LINK>
            <LINK to="/profile">Profil</LINK>
            <LINK to="/settings">Réglage</LINK>
            <LINK to="/community">Communauté</LINK>
        </StyledMenu>
    </HamburgerWrapper>
  )
}