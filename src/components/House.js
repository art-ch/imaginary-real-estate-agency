import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleHouse, resetSingleHouse } from '../redux/ducks/getHouse';

import HouseWrapper from '../styled/House';
import { Container, Image, Button, Carousel, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { priceHandler } from '../utils';

const House = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleHouse(id));
    return () => {
      dispatch(resetSingleHouse(id));
    };
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
          <>
            <h1>{title}</h1>
            <p className="h4">{priceHandler(price)}</p>
            <p className="h6">{address}</p>
            <p>{description}</p>
          </>
          <Carousel className="my-5">
            {gallery.map((image, id) => {
              return (
                <Carousel.Item className="img-container" key={id}>
                  <img src={image} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
          <>
            <p className="text-uppercase fst-italic">{name}</p>
            <Button>Contact Agent</Button>
          </>
        </Container>
      </HouseWrapper>
    );
  }
  return <Spinner animation="border" variant="primary" />;
};

export default House;
