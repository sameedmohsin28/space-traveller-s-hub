import { useSelector, useDispatch } from 'react-redux';
import { setReservationTrue, setReservationFalse } from '../../Redux/missions/missionsSlice';
import '../../styles/Missions.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missionsArray } = useSelector((store) => (store.missionsReducer));
  // console.log(missionsArray);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionsArray?.map((entry) => (
          <tr key={entry.mission_id}>
            <td>{entry.mission_name}</td>
            <td>{entry.description}</td>
            {!entry.reserved && (
              <>
                <td><div className="notAMember">NOT A MEMBER</div></td>
                <td><button type="submit" className="joinMission" onClick={() => dispatch(setReservationTrue(entry.mission_id))}>Join Mission</button></td>
              </>
            )}
            {entry.reserved && (
              <>
                <td><div className="activeMember">Active Member</div></td>
                <td><button type="submit" className="leaveMission" onClick={() => dispatch(setReservationFalse(entry.mission_id))}>Leave Mission</button></td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
