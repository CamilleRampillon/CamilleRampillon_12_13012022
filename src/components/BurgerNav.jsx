import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
import { useState } from "react";

/**
 * CSS for the component using styled.components
 */
const HamburgerWrapper = styled.div`
  display: none;
  z-index: 6;
  @media (max-width: 600px) {
    display: fixed;
  }
`;

const StyledMenu = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.688rem;
  justify-items: center;
  background: ${colors.secondary};
  width: 100%;
  height: 4.063rem;
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 0.6s ease-in-out;
  position: relative;
  z-index: 10;
`;

const LINK = styled(Link)`
  color: ${colors.tertiary};
  font-size: clamp(1rem, 1.667vw, 1.5rem);
  font-weight: 500;
  padding: 0.313rem;
  text-decoration: none;
  transition: color 0.3s linear;
  &:hover {
    color: ${colors.primary};
  }
`;

const StyledBurger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 1.5rem;
  justify-content: space-around;
  padding: 0;
  position: absolute;
  right: 1rem;
  top: 2.25rem;
  width: 1.5rem;
  z-index: 10;
  div {
    background: ${colors.primary};
    border-radius: 0.625rem;
    height: 0.2rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 1.5rem;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
/**
 *  Renders a 'Hamburger' icon for the navigation menu
 *  when the screen width is less than 600px
 *  'StyledBurger' animates from a Hamburger icon (when closed menu) to an 'X' icon (when menu open)
 * @function BurgerNav
 * @returns {JSX}
 */
const BurgerNav = () => {
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
  );
};
export default BurgerNav;
