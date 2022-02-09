import { takeLatest } from 'redux-saga/effects';

import { GET_HOUSES } from '../ducks/getRealEstate';
import { GET_SINGLE_HOUSE } from '../ducks/getHouse';

import { handleRealEstate } from './handlers/realEstate';
import { handleHouse } from './handlers/house';

export function* watcherSaga() {
  yield takeLatest(GET_HOUSES, handleRealEstate);
  yield takeLatest(GET_SINGLE_HOUSE, handleHouse);
}
