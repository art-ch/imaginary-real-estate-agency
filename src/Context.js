import React, { useState } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [realEstateList, setRealEstateList] = useState([]);
  const [currentHouse, setCurrentHouse] = useState({});

  const fetchRealEstate = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://demo0733949.mockable.io/houses');
      const data = await response.json();

      const { houses } = data;

      if (houses) {
        const newRealEstate = houses.map((house) => {
          const { id, title, price, address, image } = house;
          return { id, title, price, address, image };
        });
        setRealEstateList(newRealEstate);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchHouse = async (houseID) => {
    setLoading(true);
    try {
      const fetchHouse = await fetch(
        `https://demo0733949.mockable.io/houses/house/${houseID}`
      );
      const fetchGallery = await fetch(
        'https://demo0733949.mockable.io/gallery'
      );

      const house = await fetchHouse.json();
      const gallery = await fetchGallery.json();

      setCurrentHouse({ house, gallery });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const priceHandler = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <Context.Provider
      value={{
        fetchRealEstate,
        fetchHouse,
        priceHandler,
        currentHouse,
        loading,
        realEstateList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
