import { call, put } from 'redux-saga/effects';
import { fetchRealEstate } from '../../api';

export const GET_HOUSES = 'GET_HOUSES';
export const SET_HOUSES = 'SET_HOUSES';

export const getRealEstate = () => {
  return { type: GET_HOUSES };
};
export const setRealEstate = (houses) => {
  return { type: SET_HOUSES, houses };
};

const initialStore = {
  realEstate: [],
};

export default function reducer(state = initialStore, action = {}) {
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
    const data = yield call(fetchRealEstate);
    yield put(setRealEstate(data));
  } catch (error) {
    console.log(error);
  }
}
