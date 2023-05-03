import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(missionsAPI);
  const dataArrayFetched = response.data;
  const dataArray2 = dataArrayFetched.map((val) => (
    {
      mission_id: val.mission_id,
      mission_name: val.mission_name,
      description: val.description,
      reserved: false,
    }
  ));
  return dataArray2;
});

export default fetchMissions;
