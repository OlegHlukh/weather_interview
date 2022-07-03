import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * *::before *::after {
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
  }
`;

export default GlobalStyle;
