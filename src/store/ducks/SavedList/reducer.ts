import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { SavedList } from './types';
import { setSavedList, setLoader, setError } from './actions';

const initialState: SavedList = {
  items: [],
  meta: undefined,
  loader: false,
  error: '',
};

const savedListReducer = createReducer<SavedList>(initialState, {
  [setSavedList.type]: (state, action: PayloadAction<SavedList>) => {
    return action.payload;
  },
  [setLoader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
  [setError.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
});

export default savedListReducer;
