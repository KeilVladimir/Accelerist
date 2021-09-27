import { httpClient } from '../index';
import { paths } from '../constains';
import { RequestCompany } from '../../types';

interface Params {
  page: number;
  limit: number;
}

export const getCompany = async (params: RequestCompany) => {
  return await httpClient.get(paths.getCompany, {
    params,
  });
};

export const getFavoriteCompany = async (params: Params) => {
  return await httpClient.get(paths.getFavoriteCompany, {
    params,
  });
};

export const dislike = async (data: string) => {
  return await httpClient.get(paths.dislike + `${data}/dislike`, {
    data,
  });
};
