import { createSlice } from '@reduxjs/toolkit';
import rocketsApi from '../api';

const initialState = {
  reservationList: [],
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(rocketsApi.fulfilled, (state, { payload }) => (
      {
        ...state,
        reservationList: [...payload],
      }
    ));

    builder.addCase(rocketsApi.rejected, () => (
      console.log('rejected api')
    ));
  },
});

export default rocketSlice;
