import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";
// logo imports
import Yoga from "../assets/icons/zen.svg";
import Swim from "../assets/icons/swim.svg";
import Bike from "../assets/icons/bike.svg";
import Gym from "../assets/icons/dumbell.svg";

/**
 * CSS for the component using styled.components
 */
const SportsGroup = styled.nav`
  background: ${colors.secondary};
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: clamp(3.5rem, 8vw, 7.5rem);
    grid-template-rows: 6fr 2fr;
    margin-top: unset;
  }
  img {
    margin-top: 0.938rem;
    width: clamp(2.5rem, 4.5vw, 4rem);
  }
`;

const SportLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0.625rem;
  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
`;

const Copyright = styled.p`
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    align-items: center;
    margin-bottom: 1.25rem;
    transform: rotate(180deg);
    writing-mode: vertical-lr;
  }
`;

/**
 * Renders the left side navigation Bar
 * @function SideNav
 * @returns {JSX}
 */
const SideNav = () => {
  return (
    <SportsGroup>
      <SportLink>
        <Link to="/yoga">
          <img src={Yoga} alt="Yoga" />
        </Link>
        <Link to="/swimming">
          <img src={Swim} alt="Swim" />
        </Link>
        <Link to="/cycling">
          <img src={Bike} alt="Bike" />
        </Link>
        <Link to="/gym">
          <img src={Gym} alt="Gym" />
        </Link>
      </SportLink>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </SportsGroup>
  );
};

export default SideNav;
