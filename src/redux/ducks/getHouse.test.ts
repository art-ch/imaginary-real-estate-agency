import { call, put } from 'redux-saga/effects';

import { GET_SINGLE_HOUSE, handleHouse, setSingleHouse } from './getHouse';
import { fetchHouse } from '../../api';
import { FetchedHouseSchema } from '../../interfaces';

describe('handleHouse', () => {
  it('should generate house', () => {
    const id = '7';
    const action = {
      type: GET_SINGLE_HOUSE,
      payload: { id }
    };

    const generator = handleHouse(action);

    expect(generator.next().value).toEqual(call(fetchHouse, id));

    const data: FetchedHouseSchema = {
      house: {
        id: '1',
        title: 'House1',
        price: 228000,
        address: '1997 Yates Ave, Montebello, CA',
        image: 'image',
        description: 'desc',
        name: 'Ronnie Polla'
      },
      gallery: ['img1', 'img2', 'img3']
    };

    expect(generator.next(data).value).toEqual(put(setSingleHouse(data)));
    expect(generator.next().done).toEqual(true);
  });
});
