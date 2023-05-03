import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
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

const ROCKETS_URL = 'https://api.spacexdata.com/v4/rockets';
// fetch data for Rockets
export const rocketsApi = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(ROCKETS_URL);
    return response.data;
  },
);
