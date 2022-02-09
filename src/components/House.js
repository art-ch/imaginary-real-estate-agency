import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleHouse } from '../redux/ducks/getHouse';

import HouseWrapper from '../styled/House';
import { Container, Image, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { priceHandler } from '../utils';

const House = () => {
  const id = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleHouse(id));
  }, []);

  const currentHouse = useSelector((state) => state.getHouseReducer.house);
  const { house, gallery } = currentHouse;
  console.log(house);

  return (
    <HouseWrapper>
      {house && (
        <Container className="img-container">
          <Image src={house.image} alt="" />
        </Container>
      )}
      <Container className="my-2 g-4">
        {house && (
          <>
            <h1>{house.title}</h1>
            <p className="h4">{priceHandler(house.price)}</p>
            <p className="h6">{house.address}</p>
            <p>{house.description}</p>
          </>
        )}
        {gallery && (
          <Carousel className="my-5">
            {gallery.map((image, id) => {
              return (
                <Carousel.Item key={id} className="img-container">
                  <img src={image} alt="" />
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
        <p className="text-uppercase fst-italic">Tiffany Marin</p>
        <Button>Contact Agent</Button>
      </Container>
    </HouseWrapper>
  );
};

export default House;
