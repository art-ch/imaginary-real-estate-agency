import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const { fetchRealEstate, handlePrice, loading, realEstateList } =
    useContext(Context);

  useEffect(() => {
    fetchRealEstate();
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <h1 className="page-title">Imaginary Real Estate Agency</h1>
      {loading && <Spinner animation="border" variant="primary" />}
      <Container>
        <Row>
          {realEstateList.map((house) => {
            const { id, title, image, price, address } = house;
            return (
              <Col>
                <Card
                  style={{ width: '300px' }}
                  className="mx-auto mb-2 md-fluid"
                  key={id}
                >
                  <Card.Img src={image} className="card-image" />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{address}</Card.Text>
                    <Card.Title className="price-tag">
                      {handlePrice(price)}
                    </Card.Title>
                    <Button>Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .container {
    margin: 0 auto;
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
`;
