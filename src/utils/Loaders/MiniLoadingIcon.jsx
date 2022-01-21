import colors from '../style/colors'
import styled, { keyframes } from 'styled-components'

/**
 * Keyframe for Loader component
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/**
 * CSS for the Loader component
 */
const Loader = styled.div`
  padding: 15px;
  border: 8px solid ${colors.SecondaryText};
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 106px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

/**
 * Renders a Mini (smaller) loading icon for each
 * individual dashboard item (if needed)
 * @function MiniLoadingIcon
 * @returns {JSX}
 */
 const MiniLoadingIcon = () => {
    return (
          <Loader />
    )
}

export default MiniLoadingIcon