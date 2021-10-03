import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { AllCompany, Company } from './types';
import {
  setFavoriteCompanyAction,
  loaderAction,
  setCompany,
  setError,
  dislikeReducer,
  getCompanyIdAction,
  likeAction,
} from './actions';

const initialState: AllCompany = {
  items: [],
  meta: undefined,
  isLoading: false,
  actualCompany: undefined,
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
    state.isLoading = action.payload;
  },
  [setError.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
  [dislikeReducer.type]: (state, action: PayloadAction<string>) => {
    state.items.map((item) => {
      if (item.id === action.payload) {
        item.like = false;
      }
    });
  },
  [likeAction.type]: (state, action: PayloadAction<string>) => {
    state.items.map((item) => {
      if (item.id === action.payload) {
        item.like = true;
      }
    });
  },
  [getCompanyIdAction.type]: (state, action: PayloadAction<Company>) => {
    state.actualCompany = action.payload;
  },
});

export default companyReducer;
