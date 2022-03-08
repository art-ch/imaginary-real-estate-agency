import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

const {
  device: { tablet, laptopL }
} = theme;

const GlobalStyle = createGlobalStyle`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
@media ${tablet} {
  .img-container {
    height: 500px;
  }
}
@media ${laptopL} {
  .img-container {
    height: 500px;
  }
}
`;

export default GlobalStyle;
