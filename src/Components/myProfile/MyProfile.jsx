import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/myProfile-reservedRockets.css';

const MyProfile = () => {
  const stateData = useSelector((state) => (state.reservationListKey.reservationList));

  const reservedRockets = stateData.filter((rocket) => (rocket.reserved));

  return (
    <section className="reserved-rockets">
      <div className="rocket-list-container">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {
            reservedRockets.map((rocket) => (
              <li className="rocket-item" key={rocket.id} id={rocket.id}>
                <h2>{rocket.name}</h2>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};

export default MyProfile;
