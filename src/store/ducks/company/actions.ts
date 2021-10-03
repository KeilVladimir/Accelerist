import { createAction } from '@reduxjs/toolkit';
import { Company, ActionTypes } from './types';
import RequestCompany from 'types';

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

export const dislikeRequest = createAction<string>(ActionTypes.DISLIKE);

export const likeRequest = createAction<string>(ActionTypes.LIKE);

export const loaderAction = createAction<boolean>(ActionTypes.LOADER);

export const setError = createAction<string>(ActionTypes.ERROR);

export const dislikeReducer = createAction<string>(ActionTypes.DISLIKE_REDUCER);

export const likeAction = createAction<string>(ActionTypes.LIKE_ACTION);

export const getCompanyIdRequest = createAction<string>(
  ActionTypes.GET_COMPANY_ID_REQUEST,
);

export const getCompanyIdAction = createAction<Company>(
  ActionTypes.GET_COMPANY_ID,
);
