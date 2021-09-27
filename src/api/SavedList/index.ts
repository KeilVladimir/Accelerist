import { httpClient } from '../index';
import { paths } from '../constains';

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
