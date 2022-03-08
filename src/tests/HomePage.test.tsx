import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import HomePage from '../components/HomePage';

const mockStore = configureStore([]);

describe('<HomePage />', () => {
  let store;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      getRealEstateReducer: {
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
      }
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
