import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ mediaCreator: Function }>`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${({ mediaCreator }) => mediaCreator()}
`;

export default GlobalStyle;
