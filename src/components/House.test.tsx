import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import House from './House';
import store from '../redux/configureStore';

const component = mount(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/houses/house/7" element={<House />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

describe('Component', () => {
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
