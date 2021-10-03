import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, SavedList, SavedListItem } from './types';
import RequestCompany from '../../../types';

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

export const getSavedListIdRequest = createAction<string>(
  ActionTypes.GET_SAVED_LIST_REQUEST_ID,
);

export const getSavedListId = createAction<SavedListItem>(
  ActionTypes.SET_SAVED_LIST_ID,
);

export const excelRequest = createAction<string | undefined>(
  ActionTypes.EXCEL_REQUEST,
);

export const excelAction = createAction<{ name: string; file: string }>(
  ActionTypes.EXCEL,
);

export const saveListAction = createAction<{
  filters: RequestCompany;
}>(ActionTypes.SAVE);

export const updateRequest = createAction<SavedListItem>(
  ActionTypes.UPDATE_REQUEST,
);

export const updateAction = createAction<SavedListItem>(ActionTypes.UPDATE);

export const deleteAction = createAction<string>(ActionTypes.DELETE);
