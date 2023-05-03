import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

const rootReducer = combineReducers({
  missionsReducer: missionsSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
