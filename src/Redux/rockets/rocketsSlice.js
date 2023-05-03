import { createSlice } from '@reduxjs/toolkit';
import rocketsApi from '../api';

const initialState = {
  reservationList: [],
};
const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    addReservation: (state, { payload }) => {
      const newState = state.reservationList.map((item) => {
        if (item.id === payload) {
          return { ...item, reserved: true };
        }
        return item;
      });
      return {
        ...state,
        reservationList: [...newState],
      };
    },
    cancelReservation: (state, { payload }) => {
      const newState = state.reservationList.map((item) => {
        if (item.id === payload) {
          return { ...item, reserved: false };
        }
        return item;
      });
      return {
        ...state,
        reservationList: [...newState],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(rocketsApi.fulfilled, (state, { payload }) => {
      const selectedData = [];
      payload.forEach((object) => {
        const {
          id, name, description, flickr_images: flickrImages,
        } = object;
        const newObject = {
          id, name, description, flickrImages,
        };
        selectedData.push(newObject);
      });
      return ({
        ...state,
        reservationList: [...selectedData],
      }
      );
    });

    builder.addCase(rocketsApi.rejected, () => (
      console.log('rejected api')
    ));
  },
});

export const { addReservation, cancelReservation } = rocketSlice.actions;
export default rocketSlice;
