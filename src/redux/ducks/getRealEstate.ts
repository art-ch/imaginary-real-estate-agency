import { call, put } from 'redux-saga/effects';

import { fetchRealEstate } from '../../api';
import { RealEstateSchema, Action } from '../../interfaces';

export const GET_HOUSES = 'GET_HOUSES';
export const SET_HOUSES = 'SET_HOUSES';

export const getRealEstate = () => {
  return { type: GET_HOUSES };
};
export const setRealEstate = (houses: RealEstateSchema) => {
  return { type: SET_HOUSES, houses };
};

const initialState: RealEstateSchema = {
  realEstate: []
};

export default function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case SET_HOUSES:
      const { houses } = action;
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
