import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';
import store from '../redux/configureStore';

const component = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

describe('Initially, component', () => {
  it('should render title', () => {
    render(component);

    expect(
      screen.getByText('Imaginary Real Estate Agency')
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const renderedComponent = renderer.create(component).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
