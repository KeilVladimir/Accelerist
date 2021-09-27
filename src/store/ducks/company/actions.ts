import { createAction } from '@reduxjs/toolkit';
import { Company, ActionTypes } from './types';
import { RequestCompany } from '../../../types';

interface RequestFavoriteCompany {
  page: number;
  limit: number;
}

export const setFavoriteCompanyAction = createAction<Company>(
  ActionTypes.GET_FAVORITE_COMPANY,
);

export const getFavoriteCompanyRequest = createAction<RequestFavoriteCompany>(
  ActionTypes.GET_FAVORITE_COMPANY_REQUEST,
);

export const getCompanyRequest = createAction<RequestCompany>(
  ActionTypes.GET_COMPANY_REQUEST,
);

export const setCompany = createAction<Company>(ActionTypes.SET_COMPANY);

export const dislikeAction = createAction<string>(ActionTypes.DISLIKE);

export const loaderAction = createAction<boolean>(ActionTypes.LOADER);

export const setError = createAction<string>(ActionTypes.ERROR);
