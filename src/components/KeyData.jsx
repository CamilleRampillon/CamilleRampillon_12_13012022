import colors from '../utils/style/colors'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import health icons
import calories from '../assets/icons/calories.svg'
import protiens from '../assets/icons/protiens.svg'
import fats from '../assets/icons/fats.svg'
import carbs from '../assets/icons/carbs.svg'

/**
 * CSS for the component using styled.components
 */
const HealthWrapper = styled.div`
  color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const HealthCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 124px;
    width: 258px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 0px #00000005;
    background: #FBFBFB;
    margin-bottom: 40px;
`;

const HealthValue = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin-left: 24px;
    p {
        color: #74798C;
        font-size: 14px;
        font-weight: 500;
        margin: unset;
        }
`;

/**
 * Renders the data showing health (calories, carbs, fats & proteins)
 * @function KeyData
 * @param {object} healthData: holds users health data
 * @returns {JSX}
 */

export default function KeyData( {healthData} ) {
    const categories = ['Calories', 'Protéines', 'Glucides', 'Lipides']
    const icons = [calories, protiens, fats, carbs ]

    return (
        <HealthWrapper>
            {categories.map((cat, index) => (
                <HealthCard key={cat}>
                     <img src={icons[index]} alt=''/>
                     <HealthValue>
                        {healthData[Object.keys(healthData)[index]] + ' '}
                        {index === 0 ? 'kCal' : 'g'}
                        <p>{cat}</p>
                    </HealthValue>
                </HealthCard >
            ))}
        </HealthWrapper>
    )
}


  // Prototypes

  KeyData.propTypes = {
    healthData: PropTypes.object.isRequired,
  }