import React, { useContext } from 'react';
import { Context } from './Context';
import styled from 'styled-components';
import { Container, Image, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const House = () => {
  const gallery = [
    'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/5252546/pexels-photo-5252546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/13975/pexels-photo-13975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];
  const { priceHandler } = useContext(Context);
  return (
    <Wrapper>
      <Container className="img-container">
        <Image
          src="https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
      </Container>
      <Container className="my-2 g-4">
        <h1>Townhome</h1>
        <p className="h4">{priceHandler(289900)}</p>
        <p className="h6">1933 Frum Street, Nashville, TN 37212</p>
        <p>
          Broker ipsum dolor sit amet, consectetuer stainless steel elit. Trendy
          shops commodo ligula eget dolor. Cum sociis luxury penatibus et magnis
          dis modern interior montes, nascetur soaring views mus. Location
          location location quam felis, ultricies nec, pellentesque
          rent-controlled tenant in place, pretium quis, sem.
        </p>
        <Carousel className="my-5">
          {gallery.map((image) => {
            return (
              <Carousel.Item>
                <Container className="img-container">
                  <img className="w-100 h-100" src={image} alt="" />
                </Container>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <p className="text-uppercase fst-italic">Tiffany Marin</p>
        <Button>Contact Agent</Button>
      </Container>
    </Wrapper>
  );
};

export default House;

const Wrapper = styled.main`
  margin: 0 auto;
  .img-container {
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .container {
    max-width: 1000px;
  }

  @media (min-width: 767px) {
    .img-container {
      height: 400px;
    }
  }

  @media (min-width: 1200px) {
    .img-container {
      height: 570px;
    }
  }
`;
