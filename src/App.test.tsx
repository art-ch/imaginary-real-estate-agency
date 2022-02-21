import renderer from 'react-test-renderer';
import App from './App';

test('App is rendered without crashing', () => {
  const renderedComponent = renderer.create(<App />).toJSON();
  expect(renderedComponent).toMatchSnapshot();
});
