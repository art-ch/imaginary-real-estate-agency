import axios from 'axios';

import { priceHandler } from './utils';
import { URL_PREFIX } from './constants';

const fetchData = async (URL_SUFFIX) => {
  try {
    const response = await axios(`${URL_PREFIX}${URL_SUFFIX}`);
    const { data } = response;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRealEstate = async () => {
  const { houses } = await fetchData('houses');

  if (houses) {
    const newRealEstate = houses.map((house) => {
      const { id, title, price, address, image } = house;

      return { id, title, price: priceHandler(price), address, image };
    });

    return newRealEstate;
  }
};

export const fetchHouse = async (houseID) => {
  try {
    const house = await fetchData(`houses/house/${houseID}`);
    const gallery = await fetchData(`gallery`);

    return { house, gallery };
  } catch (error) {
    console.log(error);
  }
};
