import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReservationFalse } from '../../Redux/missions/missionsSlice';
import { cancelReservation } from '../../Redux/rockets/rocketsSlice';
import '../../styles/myProfile.css';

const MyProfile = () => {
  const dispatch = useDispatch();

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
                <button type="submit" className="leaveMission" onClick={() => dispatch(setReservationFalse(item.mission_id))}>Leave Mission</button>
              </li>
            ))
          }
        </ul>
        {!myProfileArray.length && (
          <p className="empty-missions">No Missions Joined</p>
        )}
      </div>
      <div className="rocket-list-container">
        <h2>My Rockets</h2>
        <ul className="rocket-list">
          {
            reservedRockets.map((rocket) => (
              <li className="rocket-item" key={rocket.id} id={rocket.id}>
                <h3>{rocket.name}</h3>
                <button className="article-button cancel-btn" type="button" onClick={() => dispatch(cancelReservation(rocket.id))}>Cancel Reservatio</button>
              </li>
            ))
          }
        </ul>
        {!reservedRockets.length && (
          <p className="empty-rockets">No Rockets Reserved</p>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
