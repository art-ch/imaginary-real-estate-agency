import { call, put } from 'redux-saga/effects';
import { setRealEstate } from '../../ducks/getRealEstate';
import { requestRealEstate } from '../requests/realEstate';

export function* handleRealEstate() {
  try {
    const data = yield call(requestRealEstate);
    yield put(setRealEstate(data));
  } catch (error) {
    console.log(error);
  }
}
