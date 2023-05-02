import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Components/Header';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';

function App() {
  // this will redirect us to Rockets page after refreshing the page
  // and will ignore redirectig, while we re render this App();

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
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
