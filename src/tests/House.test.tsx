import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import House from '../components/House';

const mockStore = configureStore([]);

describe('<House />', () => {
  let store;
  let component: any;

  beforeEach(() => {
    store = mockStore({
      getHouseReducer: {
        house: {
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
        }
      }
    });

    component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<House />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
