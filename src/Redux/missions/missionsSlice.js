import { createSlice } from '@reduxjs/toolkit';
import { fetchMissions } from '../api';

const initialMissionsState = {
  missionsArray: [],
  isLoading: false,
};

const missionsSlice = createSlice(
  {
    name: 'missions',
    initialState: initialMissionsState,
    reducers: {
      setReservationTrue: (state, action) => (
        {
          ...state,
          missionsArray: state.missionsArray.map((clickedMission) => {
            if (clickedMission.mission_id !== action.payload) {
              return clickedMission;
            }
            return { ...clickedMission, reserved: true };
          }),
        }
      ),

      setReservationFalse: (state, action) => (
        {
          ...state,
          missionsArray: state.missionsArray.map((change) => {
            if (change.mission_id !== action.payload) return change;
            return { ...change, reserved: false };
          }),
        }
      ),

    },

    extraReducers(builder) {
      builder
        .addCase(fetchMissions.pending, (state) => ({
          ...state,
          isLoading: true,
        }))
        .addCase(fetchMissions.fulfilled, (state, action) => ({
          ...state,
          isLoading: false,
          missionsArray: action.payload,
        }));
    },
  },
);

export const { setReservationTrue, setReservationFalse } = missionsSlice.actions;
export default missionsSlice;
