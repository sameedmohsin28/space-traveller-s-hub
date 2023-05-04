import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import Header from './Components/Header';
import MyProfile from './Components/myProfile/MyProfile';
import Rockets from './Components/rockets/Rockets';
import Missions from './Components/missions/Missions';
import { fetchMissions, rocketsApi } from './Redux/api';

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
    dispatch(fetchMissions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
