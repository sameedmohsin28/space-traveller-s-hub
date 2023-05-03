import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketSlice from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  reservationListKey: rocketSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
