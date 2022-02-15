import { call, put } from 'redux-saga/effects';
import { fetchHouse } from '../../api';

export const GET_SINGLE_HOUSE = 'GET_HOUSE';
export const SET_SINGLE_HOUSE = 'SET_HOUSE';
export const RESET_SINGLE_HOUSE = 'RESET_SINGLE_HOUSE';

export const getSingleHouse = (id) => {
  return { type: GET_SINGLE_HOUSE, payload: { id } };
};
export const setSingleHouse = (house) => {
  console.log(house);

  return { type: SET_SINGLE_HOUSE, house };
};
export const resetSingleHouse = () => {
  return { type: RESET_SINGLE_HOUSE };
};

const initialState = {
  house: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_SINGLE_HOUSE:
      const { house } = action;
      return { ...state, house };
    case RESET_SINGLE_HOUSE:
      return { ...state, house: {} };
    default:
      return state;
  }
}

export function* handleHouse(action) {
  const id = action.payload.id;
  try {
    const data = yield call(fetchHouse, id);
    yield put(setSingleHouse(data));
  } catch (error) {
    console.log(error);
  }
}
