import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketSlice from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  missionsReducer: missionsSlice.reducer,
  reservationListKey: rocketSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
