import { httpClient } from '../index';
import { paths } from '../constains';
import RequestCompany from '../../types';

interface Params {
  page: number;
  limit: number;
}

export const getCompany = async (params: RequestCompany) => {
  return await httpClient.get(paths.getCompany, {
    params,
  });
};

export const getCompanyId = async (params: string) => {
  console.log(paths.getCompany + `/${params}`);
  return await httpClient.get(paths.getCompany + `/${params}`, {});
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

export const like = async (data: string) => {
  return await httpClient.get(paths.dislike + `${data}/like`, {
    data,
  });
};
