import styled from 'styled-components';

const HomePageWrapper = styled.main`
  text-align: center;
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
`;

export default HomePageWrapper;
