import { put, call } from 'redux-saga/effects';
import { fetchHouse } from '../../api';
import { FetchedHouseSchema } from '../../types/api';
import { Action } from '../../types/redux';

export const GET_SINGLE_HOUSE = 'GET_HOUSE';
export const SET_SINGLE_HOUSE = 'SET_HOUSE';
export const RESET_SINGLE_HOUSE = 'RESET_SINGLE_HOUSE';

export const getSingleHouse = (id: string) => {
  return { type: GET_SINGLE_HOUSE, payload: { id } };
};
export const setSingleHouse = (house: FetchedHouseSchema) => {
  return { type: SET_SINGLE_HOUSE, payload: { house } };
};
export const resetSingleHouse = () => {
  return { type: RESET_SINGLE_HOUSE };
};

const initialState = {
  house: {}
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_SINGLE_HOUSE:
      const { house } = action.payload;

      return { ...state, house };
    case RESET_SINGLE_HOUSE:
      return { ...state, house: {} };
    default:
      return state;
  }
}

export function* handleHouse(action: Action) {
  const id = action.payload.id as string;

  try {
    const data: FetchedHouseSchema = yield call(fetchHouse, id);

    yield put(setSingleHouse(data));
  } catch (error) {
    console.log(error);
  }
}
