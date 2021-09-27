import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import {
  setSavedList,
  getSavedListRequest as TypeAction,
  setLoader,
} from './actions';
import { getSavedList } from 'api/SavedList';
import { setError } from './actions';

export function* watcherSavedList() {
  yield takeLatest(ActionTypes.GET_SAVED_LIST_REQUEST, getSavedListFetch);
}

export function* getSavedListFetch({ payload }: ReturnType<typeof TypeAction>) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(getSavedList, payload);
    yield put(setSavedList(data));
    yield put(setLoader(false));
  } catch (e) {
    const error = (e as Error).message;
    yield put(setError(error));
  }
}
