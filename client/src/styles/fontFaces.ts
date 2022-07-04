import {css} from 'styled-components';

import MontserratMedium from '../assets/fonts/Montserrat-Medium.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';

const fontFaces = css`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
`

export default fontFaces;