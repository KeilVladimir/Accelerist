import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, SignInDto, SignIn, ChangePass } from './types';

export const signInAction = createAction<SignIn>(ActionTypes.SIGN_IN);

export const signInFetch = createAction<SignInDto>(ActionTypes.SIGN_IN_REQUEST);

export const signUpAction = createAction<SignIn>(ActionTypes.SIGN_UP);

export const signUpFetch = createAction<SignInDto>(ActionTypes.SIGN_UP_REQUEST);

export const setErrorSignIn = createAction<boolean>(ActionTypes.SIGN_IN_ERROR);

export const setErrorSignUp = createAction<boolean>(ActionTypes.SIGN_UP_ERROR);

export const sendEmailAction = createAction<{ email: string }>(
  ActionTypes.SEND_EMAIL,
);

export const changePassword = createAction<ChangePass>(
  ActionTypes.CHANGE_PASSWORD,
);

export const setLoader = createAction<boolean>(ActionTypes.LOADER);

export const setTimer = createAction<boolean>(ActionTypes.TIMER);
