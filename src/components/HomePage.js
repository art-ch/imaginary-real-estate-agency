import React from 'react';

import HomePageWrapper from '../styled/HomePage';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRealEstate } from '../redux/ducks/getRealEstate';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRealEstate());
  }, []);

  const realEstateList = useSelector(
    (state) => state.getRealEstateReducer.realEstate
  );

  return (
    <HomePageWrapper>
      <h1 className="page-title">Imaginary Real Estate Agency</h1>
      {realEstateList.length === 0 && (
        <Spinner animation="border" variant="primary" />
      )}
      <Container>
        <Row className="g-lg-3 g-xl-4 g-5">
          {realEstateList.map((house) => {
            const { id, title, image, price, address } = house;
            return (
              <Col className="col-lg-4 col-xl-3" key={id}>
                <Card className="mx-auto">
                  <a href={image} alt="">
                    <Card.Img src={image} className="card-image" />
                  </a>
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{address}</Card.Text>
                    <Card.Title className="price-tag">{price}</Card.Title>
                    <Button onClick={() => navigate(`/houses/house/${id}`)}>
                      Details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </HomePageWrapper>
  );
};

export default HomePage;
