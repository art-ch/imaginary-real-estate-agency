import { fetchRealEstate } from './api';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import 'whatwg-fetch';

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
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('test', async () => {
  const data = await fetchRealEstate();
  console.log(data);
});
