import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

import fontFaces from './fontFaces';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fontFaces}

  * {
    box-sizing: border-box;
  }

  body {
    font-size: 23px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`;

export default GlobalStyle;
