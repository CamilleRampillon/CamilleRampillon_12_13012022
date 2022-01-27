import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import colors from './utils/style/colors';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * CSS Global styles for the site using styled.components
 */
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {  
    height: 100%;
    font-family: 'Roboto', 'Montserrat', 'Segoe UI', 'Oxygen', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${colors.tertiary};
    margin: auto;
    box-sizing: border-box;
  } 
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  
  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    padding: 0px;
    border: 0px;
    white-space: nowrap;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();