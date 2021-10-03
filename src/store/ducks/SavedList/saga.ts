import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';
import {
  setSavedList,
  getSavedListRequest as TypeAction,
  setLoader,
  getSavedListId as getSavedListIdAction,
  getSavedListIdRequest as idAction,
  excelRequest,
  excelAction,
  saveListAction,
  updateRequest,
  updateAction,
  deleteAction,
} from './actions';
import {
  deleteList,
  excel,
  getSavedList,
  getSavedListId,
  save,
  update,
} from 'api/SavedList';
import { setError } from './actions';
import createFile from '../../../helpers/excel';

export function* watcherSavedList() {
  yield takeLatest(ActionTypes.GET_SAVED_LIST_REQUEST, getSavedListFetch);
  yield takeLatest(ActionTypes.GET_SAVED_LIST_REQUEST_ID, getSavedListIdFetch);
  yield takeLatest(ActionTypes.EXCEL_REQUEST, excelFetch);
  yield takeLatest(ActionTypes.SAVE, saveListFetch);
  yield takeLatest(ActionTypes.UPDATE_REQUEST, updateListFetch);
  yield takeLatest(ActionTypes.DELETE, deleteFetch);
}

export function* getSavedListFetch({ payload }: ReturnType<typeof TypeAction>) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(getSavedList, payload);
    yield put(setSavedList(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* getSavedListIdFetch({ payload }: ReturnType<typeof idAction>) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(getSavedListId, payload);
    yield put(getSavedListIdAction(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* excelFetch({ payload }: ReturnType<typeof excelRequest>) {
  try {
    yield put(setLoader(true));
    const { data } = yield call(excel, payload);
    yield call(createFile, data);
    yield put(excelAction(data));
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* saveListFetch({ payload }: ReturnType<typeof saveListAction>) {
  try {
    yield put(setLoader(true));
    yield call(save, payload);
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* updateListFetch({
  payload,
}: ReturnType<typeof updateRequest>) {
  try {
    yield put(setLoader(true));
    yield put(updateAction(payload));
    yield call(update, { payload: payload, type: 'string' });
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}

export function* deleteFetch({ payload }: ReturnType<typeof deleteAction>) {
  try {
    yield put(setLoader(true));
    yield call(deleteList, payload);
  } catch (e) {
    if (e instanceof Error) {
      yield put(setError(e.message));
    }
  } finally {
    yield put(setLoader(false));
  }
}
