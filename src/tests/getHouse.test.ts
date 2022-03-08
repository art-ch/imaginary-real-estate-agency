import { call, put } from 'redux-saga/effects';

import {
  GET_SINGLE_HOUSE,
  handleHouse,
  setSingleHouse
} from '../redux/ducks/getHouse';
import { fetchHouse } from '../api';
import { FetchedHouseSchema } from '../types/api';

describe('handleHouse', () => {
  describe('saga generator', () => {
    let id: string;
    let generator: Generator;
    beforeAll(() => {
      id = '7';
      const action = {
        type: GET_SINGLE_HOUSE,
        payload: { id }
      };

      generator = handleHouse(action);
    });

    it('should call with fetchHouse and id', () => {
      expect(generator.next().value).toEqual(call(fetchHouse, id));
    });

    it('should fire an action that will put data into store', () => {
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
    });

    it('should finish its work with property "done" being true', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
});
