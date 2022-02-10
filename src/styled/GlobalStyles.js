import styled from 'styled-components';

const GlobalStylesWrapper = styled.div`
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

export default GlobalStylesWrapper;
