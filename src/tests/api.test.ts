import { rest } from 'msw';
import { setupServer } from 'msw/node';

import 'whatwg-fetch';
import { fetchRealEstate, fetchHouse } from '../api';
import { HouseSchema } from '../types/api';
import { URL_PREFIX } from '../constants';

const server = setupServer(
  rest.get(`${URL_PREFIX}houses`, (req, res, ctx) => {
    return res(
      ctx.json({
        realEstate: [
          {
            id: '1',
            title: 'House1',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          },
          {
            id: '2',
            title: 'House2',
            price: 228000,
            address: '1997 Yates Ave, Montebello, CA',
            image: 'image',
            description: 'desc',
            name: 'Ronnie Polla'
          },
          {
            id: '3',
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
  rest.get(`${URL_PREFIX}houses/house/7`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: '1',
        title: 'House1',
        price: 228000,
        address: '1997 Yates Ave, Montebello, CA',
        image: 'image',
        description: 'desc',
        name: 'Ronnie Polla'
      })
    );
  }),
  rest.get(`${URL_PREFIX}gallery`, (req, res, ctx) => {
    return res(ctx.json(['img1', 'img2', 'img3']));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('fetchRealEstate', () => {
  let data: any;
  beforeAll(async () => {
    data = await fetchRealEstate();
  });

  it('should return array of houses', async () => {
    expect(data.length).toBeTruthy();
  });

  it('should ensure that price is being formatted to string', () => {
    data.forEach(({ price }: any) => expect(typeof price).toBe('string'));
  });

  it('should ensure that all properties from HouseSchema interface are present', () => {
    data.forEach((house: HouseSchema) => {
      Object.keys(house).forEach((property) => expect(property).toBeTruthy());
    });
  });
});

describe('fetchHouse', () => {
  let data, id: any, price: any;
  beforeAll(async () => {
    data = await fetchHouse('7');
    const { house } = data;
    id = house.id;
    price = house.price;
  });

  it('should return house with id being of type "string"', async () => {
    expect(typeof id).toBe('string');
  });

  it('should return house with price being a number', async () => {
    expect(typeof price).toBe('number');
  });
});
