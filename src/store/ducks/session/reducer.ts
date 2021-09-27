import { createReducer } from '@reduxjs/toolkit';
import {
  setErrorSignUp,
  setErrorSignIn,
  signInAction,
  signUpAction,
  setLoader,
  setTimer,
} from './actions';
import { PayloadAction } from '@reduxjs/toolkit';

interface Session {
  accessToken: string;
  user: {
    email: string;
    id: string;
    firstName: string;
    lastName: string;
    isAuthorized: boolean;
    imported: boolean;
    teamId: string;
    role: string;
    linkedinLink: null;
    isReceivingNotifications: boolean;
    avatarKey: null;
    loggedInAt: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: null;
  };
  errorSignIn: boolean;
  errorSignUp: boolean;
  loader: boolean;
  timer: boolean;
}

const initialState: Session = {
  accessToken: '',
  user: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    isAuthorized: false,
    imported: false,
    teamId: '',
    role: '',
    linkedinLink: null,
    isReceivingNotifications: false,
    avatarKey: null,
    loggedInAt: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
  },
  errorSignIn: false,
  errorSignUp: false,
  loader: false,
  timer: false,
};

const sessionReducer = createReducer<Session>(initialState, {
  [signInAction.type]: (state, action: PayloadAction<Session>) => {
    state.accessToken = action.payload.accessToken;
    state.user = action.payload.user;
  },
  [setErrorSignIn.type]: (state, action) => {
    state.errorSignIn = action.payload;
  },
  [signUpAction.type]: (state, action: PayloadAction<Session>) => {
    state.accessToken = action.payload.accessToken;
    state.user = action.payload.user;
  },
  [setErrorSignUp.type]: (state, action) => {
    state.errorSignUp = action.payload;
  },
  [setLoader.type]: (state, action: PayloadAction<boolean>) => {
    state.loader = action.payload;
  },
  [setTimer.type]: (state, action: PayloadAction<boolean>) => {
    state.timer = action.payload;
  },
});

export default sessionReducer;
