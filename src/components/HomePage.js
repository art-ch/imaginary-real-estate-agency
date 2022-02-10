import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getRealEstate } from '../redux/ducks/getRealEstate';

import HomePageWrapper from '../styled/HomePage';
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                  <Card.Img src={image} className="card-image" />
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
