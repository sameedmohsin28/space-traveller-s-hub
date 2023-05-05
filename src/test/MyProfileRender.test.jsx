import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../Redux/store';

import MyProfile from '../Components/myProfile/MyProfile';

describe('MyProfile rendering Validation', () => {
  test('MyProfile should render with /myProfile url', () => {
    const treeSnapShot = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/myProfile" element={<MyProfile />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(treeSnapShot).toMatchSnapshot();
  });
});
