import { RootState } from '../../index';

export const getErrorIn = (state: RootState) => state.session.errorSignIn;

export const getErrorUp = (state: RootState) => state.session.errorSignUp;

export const getToken = (state: RootState) => state.session.accessToken;

export const getLoader = (state: RootState) => state.session.loader;

export const getTimer = (state: RootState) => state.session.timer;
