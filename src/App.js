import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
