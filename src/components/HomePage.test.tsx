import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mount } from 'enzyme';

import HomePage from './HomePage';

import store from '../redux/configureStore';

const component = mount(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

describe('Component', () => {
  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
