import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rockets/rocketsSlice';

// const rootReducer = combineReducers({
//   reservationListKey: rocketSlice.reducer,
// });

const store = configureStore({
  reducer: rocketSlice,
});

export default store;
