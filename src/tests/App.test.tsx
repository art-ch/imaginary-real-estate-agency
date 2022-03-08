import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('should be rendered without crashing', () => {
    const renderedComponent = renderer.create(<App />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });
});
