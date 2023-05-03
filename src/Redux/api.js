import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v4/rockets';
// fetch data for Rockets
const rocketsApi = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(ROCKETS_URL);
    return response.data;
  },
);

export default rocketsApi;
