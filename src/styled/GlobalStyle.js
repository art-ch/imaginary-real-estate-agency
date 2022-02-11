import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img-container {
    height: 300px;
  }
  @media (min-width: 767px) {
    .img-container {
      height: 500px;
    }
  }
  @media (min-width: 1200px) {
    .img-container {
      height: 570px;
    }
  }
`;

export default GlobalStyle;
