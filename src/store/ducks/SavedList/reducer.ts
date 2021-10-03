import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { SavedList, SavedListItem, File } from './types';
import {
  setSavedList,
  setLoader,
  setError,
  getSavedListId,
  excelAction,
  updateAction,
} from './actions';

const initialState: SavedList = {
  items: [],
  meta: undefined,
  isLoader: false,
  error: '',
  file: {
    name: '',
    file: '',
  },
  actualList: {
    id: '',
    name: '',
    filters: undefined,
    lastAuthor: {
      id: 'string',
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      isAuthorized: false,
      imported: false,
      teamId: 'string',
      role: 'string',
      linkedinLink: null,
      isReceivingNotifications: false,
      avatarKey: null,
      loggedInAt: 'string',
      createdAt: 'string',
      updatedAt: 'string',
      deletedAt: null,
    },
    prospectsAvailable: 0,
    createdAt: '',
    updatedAt: '',
  },
};

const savedListReducer = createReducer<SavedList>(initialState, {
  [setSavedList.type]: (state, action: PayloadAction<SavedList>) => {
    return action.payload;
  },
  [getSavedListId.type]: (state, action: PayloadAction<SavedListItem>) => {
    state.actualList = action.payload;
  },
  [setLoader.type]: (state, action: PayloadAction<boolean>) => {
    state.isLoader = action.payload;
  },
  [setError.type]: (state, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
  [excelAction.type]: (state, action: PayloadAction<File>) => {
    state.file = action.payload;
  },
  [updateAction.type]: (state, action: PayloadAction<SavedListItem>) => {
    state.actualList = action.payload;
  },
});

export default savedListReducer;
