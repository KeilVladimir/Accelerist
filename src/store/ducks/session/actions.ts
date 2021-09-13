import { createAction } from '@reduxjs/toolkit';
import { ActionTypes, SignInDto } from './types';

export const signInAction = createAction<SignInDto>(ActionTypes.SIGN_IN);
