import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import House from './HomePage';
import store from '../redux/configureStore';

const component = (
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
    const renderedComponent = renderer.create(component).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
