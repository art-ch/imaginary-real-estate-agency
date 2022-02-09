import { getHouse } from '../../../api';

export const requestHouse = (id) => {
  return getHouse(id);
};
