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
    margin-top: unset;
    display: grid;
    grid-template-rows: 6fr 2fr;
    grid-template-columns: clamp(3.5rem,8vw,7.5rem);
  }

  img {
    width: clamp(2.5rem, 4.5vw, 4rem);
    margin-top: 15px;
  }
`;

const SportLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;

  @media screen and (min-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Copyright = styled.p `
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
    @media screen and (min-width: 1024px) {
      align-items: center;
      writing-mode: vertical-lr;
      transform: rotate(180deg);
      margin-bottom: 20px;
      }
`;

/**
 * Component to render the LeftHand Side navigation Bar
 * @function SideNav
 * @returns {JSX}
 */
 const SideNav = () => {
  return (
    <SportsGroup>  
    <SportLink>
      <Link to='/yoga'><img src={Yoga} alt='Yoga'/></Link>
      <Link to='/swimming'><img src={Swim} alt='Swim'/></Link>
      <Link to='/cycling'><img src={Bike} alt='Bike'/></Link>
      <Link to='/gym'><img src={Gym} alt='Gym'/></Link>
    </SportLink>       
    <Copyright>Copyright, SportSee 2020</Copyright>
    </SportsGroup>
  );
}

export default SideNav