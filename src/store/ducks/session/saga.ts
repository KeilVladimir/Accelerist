import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, ChangePass } from './types';
import {
  setErrorSignIn,
  setErrorSignUp,
  setLoader,
  setTimer,
  signInFetch as TypeAction,
} from './actions';
import { changePassword, sendEmail, signIn, signUp } from 'api/session';
import { signInAction, signUpAction } from './actions';
import { PayloadAction } from '@reduxjs/toolkit';

export function* watcherSession() {
  yield takeLatest(ActionTypes.SIGN_IN_REQUEST, SignInFetch);
  yield takeLatest(ActionTypes.SIGN_UP_REQUEST, SignUpFetch);
  yield takeLatest(ActionTypes.SEND_EMAIL, SendEmailFetch);
  yield takeLatest(ActionTypes.CHANGE_PASSWORD, ChangePasswordFetch);
}

export function* SignInFetch({ payload }: ReturnType<typeof TypeAction>) {
  yield put(setErrorSignIn(false));
  yield put(setLoader(true));
  try {
    const { data } = yield call(signIn, {
      ...payload,
    });
    yield put(signInAction(data));
  } catch (error) {
    yield put(setErrorSignIn(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* SignUpFetch({ payload }: ReturnType<typeof TypeAction>) {
  yield put(setErrorSignIn(false));
  yield put(setLoader(true));
  try {
    const { data } = yield call(signUp, {
      ...payload,
    });
    yield put(signUpAction(data));
  } catch (error) {
    yield put(setErrorSignUp(true));
  } finally {
    yield put(setLoader(false));
  }
}

export function* SendEmailFetch({ payload }: PayloadAction<{ email: string }>) {
  yield put(setTimer(true));
  try {
    yield call(sendEmail, {
      ...payload,
    });
  } catch (e) {
    yield setErrorSignIn(true);
  }
}

export function* ChangePasswordFetch({ payload }: PayloadAction<ChangePass>) {
  yield put(setLoader(true));
  try {
    yield call(changePassword, {
      ...payload,
    });
    yield put(setLoader(false));
  } catch (e) {
    yield setErrorSignIn(true);
  }
}
