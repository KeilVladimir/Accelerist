import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import {
  getFavoriteCompanyRequest,
  dislikeAction,
  loaderAction,
  getCompanyRequest,
  setCompany,
  setError,
} from './actions';
import { getCompany, getFavoriteCompany } from '../../../api/company';
import { setFavoriteCompanyAction } from './actions';
import { dislike } from '../../../api/company';

export function* watcherCompany() {
  yield takeLatest(
    ActionTypes.GET_FAVORITE_COMPANY_REQUEST,
    getFavoriteCompanyFetch,
  );
  yield takeLatest(ActionTypes.GET_COMPANY_REQUEST, getCompanyFetch);
  yield takeLatest(ActionTypes.DISLIKE, dislikeCompanyFetch);
}

export function* getFavoriteCompanyFetch({
  payload,
}: ReturnType<typeof getFavoriteCompanyRequest>) {
  try {
    yield put(loaderAction(true));
    const { data } = yield call(getFavoriteCompany, payload);
    yield put(setFavoriteCompanyAction(data));
    yield put(loaderAction(false));
  } catch (e) {
    const error = (e as Error).message;
    yield put(setError(error));
  }
}

export function* getCompanyFetch({
  payload,
}: ReturnType<typeof getCompanyRequest>) {
  try {
    yield put(loaderAction(true));
    const { data } = yield call(getCompany, payload);
    yield put(setCompany(data));
    yield put(loaderAction(false));
  } catch (e) {
    const error = (e as Error).message;
    yield put(setError(error));
  }
}

export function* dislikeCompanyFetch({
  payload,
}: ReturnType<typeof dislikeAction>) {
  try {
    yield call(dislike, payload);
    yield put(getFavoriteCompanyRequest({ page: 1, limit: 15 }));
  } catch (e) {
    const error = (e as Error).message;
    yield put(setError(error));
  }
}
