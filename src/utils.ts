export const priceHandler = (price: number) => {
  return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

export const mediaCreator = () => {
  const mediaProperties = [
    { minWidth: 0, height: 300 },
    { minWidth: 767, height: 500 },
    { minWidth: 1200, height: 570 }
  ];

  const result = mediaProperties
    .map((dimension) => {
      const { minWidth, height } = dimension;

      return `@media (min-width: ${minWidth}px) {
            .img-container {
              height: ${height}px;
            }
          }
          `;
    })
    .join('\n');

  return result;
};
