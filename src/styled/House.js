import styled from 'styled-components';

const HouseWrapper = styled.main`
  margin: 0 auto;
  .img-container {
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container {
    max-width: 1000px;
  }

  @media (min-width: 767px) {
    .img-container {
      height: 400px;
    }
  }

  @media (min-width: 1200px) {
    .img-container {
      height: 570px;
    }
  }
`;

export default HouseWrapper;
