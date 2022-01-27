import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
// logo imports
import logo from "../assets/logo/sportsSee_logo.svg";
// import Hamburger Navigation component
import BurgerNav from "./BurgerNav";

/**
 * CSS for the component using styled.components
 */
const Image = styled.img`
  margin-left: 1rem;
  margin-top: 1.75rem;
  width: clamp(7rem, 12vw, 10rem);
  @media screen and (min-width: 600px) {
    margin-left: 0rem;
    margin-top: 0.5rem;
  }
`;

const NavGroup = styled.nav`
  background: ${colors.secondary};
  height: 5.688rem;
  @media screen and (min-width: 600px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0rem1.563rem;
  }
`;

const LinkGroup = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem;
    width: 80%;
  }
`;

const LINK = styled(NavLink)`
  color:  ${colors.tertiary};
  font-size: clamp(1rem, 1.667vw, 1.5rem);
  font-weight: 500;
  padding: 0.313rem;
  text-decoration: none;
    &.${(props) => props.activeClassName} {
      color: ${colors.primary};
        }
    &:hover {
      color: ${colors.primary};
`;

/**
 * Renders the Header Navigation
 * Changes to a Hamburger Nav icon if screen width less than 600px (see BurgerNav component)
 * @function Header
 * @returns (JSX)
 */
const Header = () => {
  return (
    <header>
      <NavGroup>
        <LINK to="/">
          <Image className="logo" src={logo} alt="logo"></Image>
        </LINK>
        <LinkGroup>
          <LINK activeClassName="active" exact to="/">
            Accueil
          </LINK>
          <LINK activeClassName="active" to="/profile">
            Profil
          </LINK>
          <LINK activeClassName="active" to="/settings">
            Réglage
          </LINK>
          <LINK activeClassName="active" to="/community">
            Communauté
          </LINK>
        </LinkGroup>
        <BurgerNav />
      </NavGroup>
    </header>
  );
};

export default Header;
