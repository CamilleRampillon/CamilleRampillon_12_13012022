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
  border: 8px solid ${colors.primary};
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 106px;
`;

/**
 * Renders a Mini (smaller) loading icon for each
 * individual dashboard item (if needed)
 * @function MiniLoadingIcon
 * @returns {JSX}
 */
export default function MiniLoadingIcon() {
    return (
          <Loader />
    )
}