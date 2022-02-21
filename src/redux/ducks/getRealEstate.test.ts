import { call, put } from 'redux-saga/effects';

import { handleRealEstate, setRealEstate } from './getRealEstate';
import { fetchRealEstate } from '../../api';
import { RealEstateSchema } from '../../interfaces';

describe('handleRealEstate', () => {
  it('should generate list of real estate', () => {
    const generator = handleRealEstate();
    expect(generator.next().value).toEqual(call(fetchRealEstate));

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
    expect(generator.next().done).toEqual(true);
  });
});
