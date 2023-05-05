import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../Redux/store';

import Rockets from '../Components/rockets/Rockets';

describe('Rockets rendering Validation', () => {
  test('Rockets should render with / url', () => {
    const treeSnapShot = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Rockets />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(treeSnapShot).toMatchSnapshot();
  });
});
