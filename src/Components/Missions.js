import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchMissions from '../Redux/api';
import { setReservationTrue, setReservationFalse } from '../Redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  const { missionsArray } = useSelector((store) => (store.missionsReducer));
  // console.log(missionsArray);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>ActiveButton</th>
        </tr>
      </thead>
      <tbody>
        {missionsArray?.map((entry) => (
          <tr key={entry.mission_id}>
            <td>{entry.mission_name}</td>
            <td>{entry.description}</td>
            {!entry.reserved && (
              <>
                <td>NOT A MEMBER</td>
                <td><button type="submit" onClick={() => dispatch(setReservationTrue(entry.mission_id))}>Join Mission</button></td>
              </>
            )}
            {entry.reserved && (
              <>
                <td>Active Member</td>
                <td><button type="submit" onClick={() => dispatch(setReservationFalse(entry.mission_id))}>Leave Mission</button></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
