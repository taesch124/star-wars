import { injectGlobal } from 'styled-components';
import mainFont from './Fonts/Starjedi.ttf';
/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'StarJedi';
    src: url(${mainFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;