import { RootState } from '../../index';

export const getSavedList = (state: RootState) => state.savedList;

export const getLoader = (state: RootState) => state.savedList.loader;
