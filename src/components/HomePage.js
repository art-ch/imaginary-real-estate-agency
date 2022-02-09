import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getRealEstate } from '../redux/ducks/getRealEstate';

import HomePageWrapper from '../styled/HomePage';
import { Card, Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRealEstate());
  }, []);

  const realEstateList = useSelector(
    (state) => state.getRealEstateReducer.realEstate
  );

  return (
    <HomePageWrapper>
      <h1 className="page-title">Imaginary Real Estate Agency</h1>
      {/* {loading && <Spinner animation="border" variant="primary" />} */}
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
                    <Card.Title className="price-tag">{price}</Card.Title>
                    <Link to={`/houses/house/${id}`}>Details</Link>
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
