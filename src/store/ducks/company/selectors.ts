import { RootState } from '../../index';

export const getCompanys = (state: RootState) => state.company;

export const getLoader = (state: RootState) => state.company.isLoading;
