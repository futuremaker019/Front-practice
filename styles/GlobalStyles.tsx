import reset from "styled-reset"
import {css, createGlobalStyle} from "styled-components"
import palette from "./palette"

const globalStyle = css `
  ${reset};
  *{
    box-sizing: border-box;
  }

  body {
    font-family: Noto Sans, Noto Sans KR;
    color : ${palette.black}
  }
`;

const GlobalStyles = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyles;
