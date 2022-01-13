import colors from '../utils/style/colors'
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
  padding: 50px;
  border: 20px solid ${colors.primary};
  animation: ${rotate} 1s infinite linear;
  border-bottom-color: transparent;
  border-radius: 106px;
  height: 0;
  width: 0;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 117px;
  height: 90vh;
`;

/**
 * Renders a loading icon (turning semi-circle)
 * @function LoadingIcon
 * @returns {JSX}
 */
export default function LoadingIcon() {
    return (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
    )
}