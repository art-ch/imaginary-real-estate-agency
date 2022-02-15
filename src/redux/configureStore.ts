import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import getRealEstateReducer from './ducks/getRealEstate';
import getHouseReducer from './ducks/getHouse';
import { watcherSaga } from './rootSaga';

const reducer = combineReducers({ getRealEstateReducer, getHouseReducer });

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
