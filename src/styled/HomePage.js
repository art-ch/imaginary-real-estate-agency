import styled from 'styled-components';

const HomePageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .container {
    margin: 0 auto;
  }
  .card {
    width: 300px;
  }
  .card-image {
    height: 15rem;
    object-fit: cover;
  }
  .price-tag {
    margin: 1rem 0;
    font-size: 32px;
  }

  @media (max-width: 767px) {
    .small-screen-centering {
      width: 300px;
    }
  }
  @media (min-width: 1200px) {
    .col {
      max-width: 330px;
    }
  }
`;

export default HomePageWrapper;
