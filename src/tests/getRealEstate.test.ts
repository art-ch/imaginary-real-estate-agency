import { call, put } from 'redux-saga/effects';

import { handleRealEstate, setRealEstate } from '../redux/ducks/getRealEstate';
import { fetchRealEstate } from '../api';
import { RealEstateSchema } from '../types/api';

describe('handleRealEstate', () => {
  describe('saga generator', () => {
    let generator: Generator;

    beforeAll(() => {
      generator = handleRealEstate();
    });

    it('should call with fetchRealEstate', () => {
      expect(generator.next().value).toEqual(call(fetchRealEstate));
    });

    it('should fire an action that will put data into store', () => {
      const data: RealEstateSchema = {
        realEstate: [
          {
            id: '1',
            title: 'House1',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          }
        ]
      };

      expect(generator.next(data).value).toEqual(put(setRealEstate(data)));
    });

    it('should finish its work with property "done" being true', () => {
      expect(generator.next().done).toEqual(true);
    });
  });
});
