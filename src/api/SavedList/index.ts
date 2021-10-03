import { httpClient } from '../index';
import { paths } from '../constains';
import RequestCompany from '../../types';
import { SavedListItem } from '../../store/ducks/SavedList/types';
import { PayloadAction } from '@reduxjs/toolkit';

interface Params {
  page: number;
  limit: number;
  sort: string;
}

export const getSavedList = async (params: Params) => {
  return await httpClient.get(paths.getSavedList, {
    params,
  });
};

export const getSavedListId = async (params: string) => {
  return await httpClient.get(paths.getSavedList + '/' + params, { params });
};

export const excel = async (params: string | undefined) => {
  return await httpClient.get(paths.getSavedList + '/' + params + '/excel', {
    params,
  });
};

export const save = async (params: { filters: RequestCompany }) => {
  return await httpClient.post(paths.getSavedList, {
    params,
  });
};

export const update = async (params: PayloadAction<SavedListItem>) => {
  const update = {
    ...params.payload,
  };
  return await httpClient.patch(paths.getSavedList + '/' + params.payload.id, {
    ...update,
  });
};

export const deleteList = async (params: string) => {
  return await httpClient.patch(paths.getSavedList + '/' + params, {});
};
