import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { HomePage, House } from './components';

import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/houses/house/:id" element={<House />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
