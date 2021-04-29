import reset from "styled-reset"
import {css, createGlobalStyle} from "styled-components"
import palette from "./palette"

const globalStyle = css `
  ${reset};
  *{
    box-sizing: border-box;
    color: ${palette.black}
  }

  body {
    font-family: Noto Sans, Noto Sans KR;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${palette.black}
  }
`;

const GlobalStyles = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyles;
