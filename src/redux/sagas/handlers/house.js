import { call, put } from 'redux-saga/effects';
import { setSingleHouse } from '../../ducks/getHouse';
import { requestHouse } from '../requests/house';

export function* handleHouse(action) {
  try {
    const data = yield call(requestHouse, action.payload.id);
    yield put(setSingleHouse(data));
  } catch (error) {
    console.log(error);
  }
}
