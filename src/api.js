import { priceHandler } from './utils';

export const fetchRealEstate = async (hook) => {
  try {
    const response = await fetch('https://demo0733949.mockable.io/houses');
    const data = await response.json();
    const { houses } = data;

    if (houses) {
      const newRealEstate = houses.map((house) => {
        const { id, title, price, address, image } = house;
        return { id, title, price: priceHandler(price), address, image };
      });
      return hook(newRealEstate);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getHouse = async (houseID, hook) => {
  try {
    const fetchHouse = await fetch(
      `https://demo0733949.mockable.io/houses/house/${houseID}`
    );
    const fetchGallery = await fetch('https://demo0733949.mockable.io/gallery');

    const house = await fetchHouse.json();
    const gallery = await fetchGallery.json();

    return hook({ house, gallery });
  } catch (error) {
    console.log(error);
  }
};
