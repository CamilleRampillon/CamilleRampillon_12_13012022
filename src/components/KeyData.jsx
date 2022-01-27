import colors from "../utils/style/colors";
import styled from "styled-components";
import PropTypes from "prop-types";
// import health icons
import calories from "../assets/icons/calories.svg";
import protiens from "../assets/icons/protiens.svg";
import fats from "../assets/icons/fats.svg";
import carbs from "../assets/icons/carbs.svg";

/**
 * CSS for the component using styled.components
 */
const HealthWrapper = styled.div`
  align-items: center;
  color: ${colors.NumberText};
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 455px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.625rem;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-left: 10%;
  }
`;

const HealthCard = styled.article`
  align-items: center;
  background: ${colors.backgroundLight};
  border-radius: 0.313rem;
  box-shadow: 0rem 0.125rem 0.25rem 0rem #00000005;
  display: flex;
  height: 4.375rem;
  margin: 0.625rem;
  width: 100%;

  img {
    height: 3.125rem;
    margin-left: 0.938rem;
    width: 3.125rem;
    @media screen and (min-width: 1024px) {
      height: 3.75rem;
      width: 3.75rem;
    }
  }
  @media screen and (min-width: 455px) {
    flex: 1 1 15.625rem;
    margin: unset;
    min-width: 20.313rem;
  }
  @media screen and (min-width: 1024px) {
    flex: unset;
    height: 6.25rem;
    margin: unset;
    min-width: unset;
  }
  @media screen and (min-width: 1440px) {
    height: 7.75rem;
  }
`;

const HealthValue = styled.div`
  font-size: clamp(1rem, 1.389vw, 1.25rem);
  font-style: normal;
  font-weight: 700;
  margin-left: 1.5rem;
  p {
    color: ${colors.SecondaryText};
    font-size: 0.875rem;
    font-weight: 500;
    margin: unset;
  }
`;

/**
 * Renders the data showing health (calories, carbs, fats & protiens)
 * @function KeyData
 * @param {object} healthData: users health data
 * @returns {JSX}
 */
const KeyData = ({ healthData }) => {
  const categories = ["Calories", "Protéines", "Glucides", "Lipides"];
  const icons = [calories, protiens, fats, carbs];

  return (
    <HealthWrapper>
      {categories.map((cat, index) => (
        <HealthCard key={cat}>
          <img src={icons[index]} alt="" />
          <HealthValue>
            {Object.values(healthData)[index] + " "}
            {index === 0 ? "kCal" : "g"}
            <p>{cat}</p>
          </HealthValue>
        </HealthCard>
      ))}
    </HealthWrapper>
  );
};

export default KeyData;

// Proptypes
KeyData.propTypes = {
  healthData: PropTypes.object.isRequired,
};
