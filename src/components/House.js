import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HouseWrapper from '../styled/House';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleHouse, resetSingleHouse } from '../redux/ducks/getHouse';
import { priceHandler } from '../utils';

const House = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSingleHouse(id));
    return () => {
      dispatch(resetSingleHouse(id));
    };
    // eslint-disable-next-line
  }, []);

  const currentHouse = useSelector((state) => state.getHouseReducer.house);
  const { house, gallery } = currentHouse;

  if (house && gallery) {
    const { image, title, price, address, description, name } = house;
    return (
      <HouseWrapper>
        <Container className="img-container">
          <Image src={image} alt="" />
        </Container>
        <Container className="my-2 g-4">
          <h1>{title}</h1>
          <p className="h4">{priceHandler(price)}</p>
          <p className="h6">{address}</p>
          <p>{description}</p>
          <p className="text-uppercase fst-italic">{name}</p>
          <Container className="container-sm p-0 mb-3">
            <Row className="flex-column g-2">
              <Col className="w-100 d-flex">
                <Button variant="outline-primary" className="me-2 w-100">
                  Contact Agent
                </Button>
                <Button className="w-100">Take a Tour</Button>
              </Col>
              <Col>
                <Button
                  className="w-100"
                  variant="warning"
                  onClick={() => navigate('/')}
                >
                  Back
                </Button>
              </Col>
            </Row>
          </Container>
          <Container className="p-0">
            <Row>
              <h2 className="text-center">Gallery</h2>
              {gallery.map((image, id) => {
                return (
                  <Col className="mb-3 col-12 col-sm-4 col-xl-3" key={id}>
                    <a href={image}>
                      <img src={image} alt="" />
                    </a>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>
      </HouseWrapper>
    );
  }
  return (
    <div className="mt-3 text-center">
      <Spinner className="center-block" animation="border" variant="primary" />
    </div>
  );
};

export default House;
