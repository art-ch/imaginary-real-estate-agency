import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHouse } from '../api';
import HouseWrapper from '../styled/House';
import { Container, Image, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const House = () => {
  const [loading, setLoading] = useState(false);
  const [currentHouse, setCurrentHouse] = useState({});

  const id = useParams().id;

  useEffect(() => {
    getHouse(id, setCurrentHouse);
  }, []);

  return (
    <HouseWrapper>
      <Container className="img-container">
        <Image
          src="https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </Container>
      <Container className="my-2 g-4">
        <h1>Townhome</h1>
        <p className="h4">{289900}</p>
        <p className="h6">1933 Frum Street, Nashville, TN 37212</p>
        <p>
          Broker ipsum dolor sit amet, consectetuer stainless steel elit. Trendy
          shops commodo ligula eget dolor. Cum sociis luxury penatibus et magnis
          dis modern interior montes, nascetur soaring views mus. Location
          location location quam felis, ultricies nec, pellentesque
          rent-controlled tenant in place, pretium quis, sem.
        </p>
        {/* <Carousel className="my-5">
          {gallery.map((image) => {
            return (
              <Carousel.Item className="img-container">
                <img src={image} alt="" />
              </Carousel.Item>
            );
          })}
        </Carousel> */}
        <p className="text-uppercase fst-italic">Tiffany Marin</p>
        <Button>Contact Agent</Button>
      </Container>
    </HouseWrapper>
  );
};

export default House;
