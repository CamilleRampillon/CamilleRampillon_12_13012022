import { Link } from 'react-router-dom'
import styled from 'styled-components'
// logo imports
import Yoga from '../assets/icons/zen.svg'
import Swim from '../assets/icons/swim.svg'
import Bike from '../assets/icons/bike.svg'
import Gym from '../assets/icons/dumbell.svg'

const SportsGroup = styled.div `
    width: 117px;
    height: 90vh;
    list-style-type: none; 
    text-align: center;
    background: black;
    position: absolute;
    p {
        font-size: 12px;
        transform: rotate(-90deg);
        width: 165px;
        font-weight: 500;
        position: absolute;
        left: -25px;
        bottom: 80px;
      }
    img {
        width: 64px;
        margin: 10px;
      }
`;

const SportLink = styled.div `
    text-decoration: none;
    cursor: pointer; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    height: 80vh;
`;

/**
 * Component to render the LeftHand Side navigation Bar
 * @function SideNav
 * @returns {JSX}
 */
  export default function SideNav() {

    return (
      <SportsGroup>
          <nav>
              <SportLink>
                <li><Link to='/user'><img className='coverImage' src={Yoga} alt='Yoga'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Swim} alt='Swim'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Bike} alt='Bike'/></Link> </li>
                <li><Link to='/user'><img className='coverImage' src={Gym} alt='Gym'/></Link> </li>
              </SportLink>
          </nav>
                <p>Copyright, SportSee 2020</p>
      </SportsGroup>
      )
  }