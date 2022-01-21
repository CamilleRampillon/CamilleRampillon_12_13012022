import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
// logo imports
import logo from "../assets/logo/sportsSee_logo.svg"
// import Hamburger Navigation component
import { BurgerNav } from './BurgerNav';

/**
 * CSS for the component using styled.components
 */
const Image = styled.img`
  width: clamp(7rem, 12vw, 10rem);
  margin-top: 28px;
  margin-left: 16px;
  @media screen and (min-width: 600px) {
    margin-top: 8px;
    margin-left: 0px;
  }
`;

const NavGroup = styled.nav`
  background: ${colors.secondary};
  height: 91px;

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 25px;
  }
`;

const LinkGroup = styled.div`
  display: none;
   @media screen and (min-width: 600px) {
    justify-content: space-between;
    padding: 10px;
     display: flex;
     width: 80%;
   }
`;

const LINK = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: ${colors.tertiary};
  padding: 5px;
  font-size: clamp(1rem, 1.667vw, 1.5rem);
  &.${(props) => props.activeClassName} {
    color: ${colors.primary};
      }
    &:hover {
      color: ${colors.primary};
    }
`;

/**
 * Component to render the Header Navigation
 * Changes to a Hamburger Nav icon if screen width less than 600px (see BurgerNav component)
 * @function Header
 * @returns (JSX)
 */
export default function Header() {
  return (
    <header>
      <NavGroup>
          <LINK to="/"><Image className="logo" src={logo} alt="logo"></Image></LINK>
          <LinkGroup>
            <LINK activeClassName="active" exact to="/">Accueil</LINK>
            <LINK activeClassName="active" to="/profile">Profil</LINK>
            <LINK activeClassName="active" to="/settings">Réglage</LINK>
            <LINK activeClassName="active" to="/community">Communauté</LINK>
          </LinkGroup>
          <BurgerNav />
      </NavGroup>
    </header>
  );
}
