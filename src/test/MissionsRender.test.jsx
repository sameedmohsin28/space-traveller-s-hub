import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../Redux/store';

import Missions from '../Components/missions/Missions';

describe('Missions rendering Validation', () => {
  test('Missions should render with /missions url', () => {
    const treeSnapShot = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/missions" element={<Missions />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(treeSnapShot).toMatchSnapshot();
  });
});
