import { rest } from 'msw';
import { setupServer } from 'msw/node';

import 'whatwg-fetch';

import { fetchRealEstate, fetchHouse } from './api';
import { HouseSchema } from './interfaces';

const server = setupServer(
  rest.get('https://demo0733949.mockable.io/houses', (req, res, ctx) => {
    return res(
      ctx.json({
        realEstate: [
          {
            id: 1,
            title: 'House1',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          },
          {
            id: 2,
            title: 'House2',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          },
          {
            id: 3,
            title: 'House3',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          }
        ]
      })
    );
  }),
  rest.get(
    'https://demo0733949.mockable.io/houses/house/7',
    (req, res, ctx) => {
      return res(
        ctx.json({
          id: 1,
          title: 'House1',
          price: 228000,
          address: '1997 Yates Ave, Montebello, CA',
          image: 'image',
          description: 'desc',
          name: 'Ronnie Polla'
        })
      );
    }
  ),
  rest.get('https://demo0733949.mockable.io/gallery', (req, res, ctx) => {
    return res(ctx.json(['img1', 'img2', 'img3']));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('fetchRealEstate', () => {
  it('should return array of houses with price being formatted along the way', async () => {
    const data: any = await fetchRealEstate();

    expect(data.length).toBeTruthy();
    data.forEach(({ price }: any) => expect(typeof price).toBe('string'));
    data.forEach((house: HouseSchema) => {
      Object.keys(house).forEach((property) => expect(property).toBeTruthy());
    });
  });
});

describe('fetchHouse', () => {
  it('should return house with price being of number type', async () => {
    const data = await fetchHouse('7');
    const {
      house: { price }
    } = data;
    expect(typeof price).toBe('number');
  });
});
