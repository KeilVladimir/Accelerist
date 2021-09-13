import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { sessionReducer } from './ducks/session';

const RootReducer = combineReducers({
  session: sessionReducer,
});

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
