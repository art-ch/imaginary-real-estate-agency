import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const { fetchRealEstate, fetchHouse, priceHandler, loading, realEstateList } =
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
              <Col key={id}>
                <Card className="mx-auto mb-4 fluid">
                  <Card.Img src={image} className="card-image" />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{address}</Card.Text>
                    <Card.Title className="price-tag">
                      {priceHandler(price)}
                    </Card.Title>
                    {/* <Link to='~/house/id'>Details</Link> */}
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
