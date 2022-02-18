import axios from 'axios';

import {
  FetchedHouseSchema,
  HouseSchema,
  RealEstateSchema
} from './interfaces';
import { priceHandler } from './utils';
import { URL_PREFIX } from './constants';

export const fetchData = async (URL_SUFFIX: string) => {
  try {
    const response = await axios(`${URL_PREFIX}${URL_SUFFIX}`);
    const { data } = response;

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchRealEstate = async (): Promise<RealEstateSchema> => {
  try {
    const { houses } = await fetchData('houses');

    const newRealEstate = houses.map((house: HouseSchema) => {
      const { id, title, price, address, image } = house;

      return { id, title, price: priceHandler(price), address, image };
    });

    return newRealEstate;
  } catch (error) {
    throw error;
  }
};

export const fetchHouse = async (
  houseID: string
): Promise<FetchedHouseSchema> => {
  try {
    const house = await fetchData(`houses/house/${houseID}`);
    const gallery = await fetchData(`gallery`);

    return { house, gallery };
  } catch (error) {
    throw error;
  }
};
