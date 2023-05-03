import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import Header from './Components/Header';
import MyProfile from './Components/myProfile/MyProfile';
import Rockets from './Components/rockets/Rockets';
import Missions from './Components/Missions';
import { rocketsApi } from './Redux/api';

function App() {
  const dispatch = useDispatch();
  // default view
  const navigate = useNavigate();
  const currentLocation = useLocation();
  useEffect(() => {
    if (currentLocation.pathname !== '/') {
      navigate('/');
    }
    dispatch(rocketsApi());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
