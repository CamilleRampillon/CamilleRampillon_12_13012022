import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/style/colors";

/**
 * CSS for the component using styled.components
 */
const ErrorWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.primary};

  h1 {
    font-size: clamp(6rem, 20vw, 21.875rem);
    font-weight: 700;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }
  p {
    font-size: clamp(1.125rem, 2.5vw, 3rem);
    text-align: center;
    font-weight: 500;
    margin-bottom: 8.313rem;
  }
`;

const ReturnLink = styled(Link)`
  color: ${colors.primary};
  font-size: clamp(0.875rem, 1.5vw, 1.375rem);
  font-weight: 500;
  margin-bottom: 5rem;
`;

/**
 * Component to render Error 404 page
 * @function Error
 * @returns {JSX}
 */
const Error = () => {
  return (
    <ErrorWrapper>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <ReturnLink to="/">Retourner sur la page d’accueil</ReturnLink>
    </ErrorWrapper>
  );
};

export default Error;
