import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before{
  margin : 0px;
  padding: 0px;
  box-sizing: inherit;
}

body{
  box-sizing: border-box;
}
`;

export default GlobalStyles;
