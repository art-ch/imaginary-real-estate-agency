import { call, put } from 'redux-saga/effects';

import { fetchRealEstate } from '../../api';
import { RealEstateSchema } from '../../types/api';
import { Action } from '../../types/redux';

export const GET_HOUSES = 'GET_HOUSES';
export const SET_HOUSES = 'SET_HOUSES';

export const getRealEstate = () => {
  return { type: GET_HOUSES };
};
export const setRealEstate = (houses: RealEstateSchema) => {
  return { type: SET_HOUSES, payload: { houses } };
};

const initialState = {
  realEstate: []
};

export default function reducer(
  state: RealEstateSchema = initialState,
  action: Action
) {
  switch (action.type) {
    case SET_HOUSES:
      const { houses } = action.payload;
      return { ...state, realEstate: houses };
    default:
      return state;
  }
}

export function* handleRealEstate() {
  try {
    const data: RealEstateSchema = yield call(fetchRealEstate);

    yield put(setRealEstate(data));
  } catch (error) {
    console.log(error);
  }
}
