export const GET_SINGLE_HOUSE = 'GET_HOUSE';
export const SET_SINGLE_HOUSE = 'SET_HOUSE';

export const getSingleHouse = (id) => {
  return { type: GET_SINGLE_HOUSE, payload: { id } };
};
export const setSingleHouse = (house) => {
  return { type: SET_SINGLE_HOUSE, house };
};

const initialStore = {
  house: [],
};

export default function reducer(state = initialStore, action = {}) {
  switch (action.type) {
    case SET_SINGLE_HOUSE:
      const { house } = action;
      return { ...state, house };
    default:
      return state;
  }
}
