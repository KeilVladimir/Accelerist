import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { AllCompany } from './types';
import {
  setFavoriteCompanyAction,
  loaderAction,
  setCompany,
  setError,
} from './actions';
const initialState: AllCompany = {
  items: [],
  meta: undefined,
  loader: false,
  error: '',
};

const companyReducer = createReducer<AllCompany>(initialState, {
  [setFavoriteCompanyAction.type]: (
    state,
    action: PayloadAction<AllCompany>,
  ) => {
    return action.payload;
  },
  [setCompany.type]: (state, action: PayloadAction<AllCompany>) => {
    state.items = action.payload.items;
    state.meta = action.payload.meta;
  },
  [loaderAction.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
  [setError.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
});

export default companyReducer;
