import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, SavedList } from './types';

interface Params {
  page: number;
  limit: number;
  sort: string;
}

export const setSavedList = createAction<SavedList>(ActionTypes.SET_SAVED_LIST);

export const getSavedListRequest = createAction<Params>(
  ActionTypes.GET_SAVED_LIST_REQUEST,
);

export const setLoader = createAction<boolean>(ActionTypes.LOADER);

export const setError = createAction<string>(ActionTypes.ERROR);
