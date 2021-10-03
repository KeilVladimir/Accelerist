import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import {
  getFavoriteCompanyRequest,
  loaderAction,
  getCompanyRequest,
  setCompany,
  setError,
  dislikeReducer,
  dislikeRequest,
  likeRequest,
  likeAction,
  getCompanyIdRequest,
  getCompanyIdAction,
} from './actions';
import {
  getCompany,
  getCompanyId,
  getFavoriteCompany,
  like,
} from '../../../api/company';
import { setFavoriteCompanyAction } from './actions';
import { dislike } from '../../../api/company';

export function* watcherCompany() {
  yield takeLatest(
    ActionTypes.GET_FAVORITE_COMPANY_REQUEST,
    getFavoriteCompanyFetch,
  );
  yield takeLatest(ActionTypes.GET_COMPANY_REQUEST, getCompanyFetch);
  yield takeLatest(ActionTypes.DISLIKE, dislikeCompanyFetch);
  yield takeLatest(ActionTypes.LIKE, likeCompanyFetch);
  yield takeLatest(ActionTypes.GET_COMPANY_ID_REQUEST, getCompanyIdFetch);
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
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(loaderAction(false));
  }
}

export function* getCompanyFetch({
  payload,
}: ReturnType<typeof getCompanyRequest>) {
  try {
    yield put(loaderAction(true));
    const { data } = yield call(getCompany, payload);
    yield put(setCompany(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(loaderAction(false));
  }
}

export function* dislikeCompanyFetch({
  payload,
}: ReturnType<typeof dislikeRequest>) {
  try {
    yield put(dislikeReducer(payload));
    yield call(dislike, payload);
    // yield put(getFavoriteCompanyRequest({ page: 1, limit: 15 }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  }
}

export function* likeCompanyFetch({ payload }: ReturnType<typeof likeRequest>) {
  try {
    yield put(likeAction(payload));
    yield call(like, payload);
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  }
}

export function* getCompanyIdFetch({
  payload,
}: ReturnType<typeof getCompanyIdRequest>) {
  try {
    yield put(loaderAction(true));
    const { data } = yield call(getCompanyId, payload);
    yield put(getCompanyIdAction(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(loaderAction(false));
  }
}
