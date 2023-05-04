import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/myProfile.css';

const MyProfile = () => {
  const stateData = useSelector((state) => (state.reservationListKey.reservationList));
  const reservedRockets = stateData.filter((rocket) => (rocket.reserved));

  const { missionsArray } = useSelector((store) => (store.missionsReducer));
  const myProfileArray = missionsArray?.filter((trueReserved) => trueReserved.reserved === true);

  return (
    <section className="reserved-missions-rockets">
      <div className="missions-list-container">
        <h2>My Missions</h2>
        <ul className="missions-list">
          {
            myProfileArray?.map((item) => (
              <li className="missions-item" key={item.mission_id} id={item.mission_id}>
                <h3>{item.mission_name}</h3>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="rocket-list-container">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {
            reservedRockets.map((rocket) => (
              <li className="rocket-item" key={rocket.id} id={rocket.id}>
                <h3>{rocket.name}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
