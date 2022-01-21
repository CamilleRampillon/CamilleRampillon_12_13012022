import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../utils/style/colors'
import Title from '../components/Title'
//import icons
import logo from '../assets/logo/runningMan.svg'


/**
 * CSS for the component using styled.components
 */
 const MainWrapper = styled.main`
 padding: clamp(0.625rem, 1.5vw, 4.5rem);
 min-height: 100vh; 
 img {
  width: clamp(6rem, 17vw, 20rem);
  }
`;

const LINKS = styled(Link)`
  color:  ${colors.secondary};
  font-size: clamp(1rem, 1.667vw, 1.5rem);
  font-weight: 500;
  padding: 0.313rem;
  text-decoration: none;
    &:hover {
      color: ${colors.primary};
`;

const CardWrapper = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
    @media screen and (min-width: 600px) {
      flex-direction: row;
      justify-content: space-around;
      }
`;

const Card = styled.article`
margin-bottom: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    h2 {
      margin: unset;
    }
`;

/**
 * Renders the 'Welcome Page' to make the demonstration of the project easier
 * @function WelcomePage
 * @returns {JSX}
 */
const WelcomePage = () => {
  return (
    <MainWrapper>
      <Title intro={'Bienvenue sur le site de '} 
      highlightedText={'SportSee !'} 
      text={'Veuillez sélectionner un profil pour voir une démonstration...'} />
      <CardWrapper>
          <LINKS to='/user/12/'>
              <Card>
                <img src={logo} alt=''/>
                <h2>Karl</h2>
              </Card>
          </LINKS>
          <LINKS to='/user/18/'>
            <Card>
              <img src={logo} alt=''/>
              <h2>Cecilia</h2>
            </Card>
          </LINKS>
      </CardWrapper>
    </MainWrapper>
    )
}

export default WelcomePage