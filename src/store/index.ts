import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { sessionReducer } from './ducks/session';
import createSagaMiddleware from 'redux-saga';
import { companyReducer } from './ducks/company';
import { rootSaga } from './ducks/rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { savedListReducer } from './ducks/SavedList';

const sagaMiddleware = createSagaMiddleware();

const RootReducer = combineReducers({
  session: sessionReducer,
  company: companyReducer,
  savedList: savedListReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
