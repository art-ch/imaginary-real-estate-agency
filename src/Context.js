import React, { useState } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [realEstateList, setRealEstateList] = useState([]);

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

  const handlePrice = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <Context.Provider
      value={{ fetchRealEstate, handlePrice, loading, realEstateList }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
