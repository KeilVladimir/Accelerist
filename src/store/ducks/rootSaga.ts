import { all } from 'redux-saga/effects';
import { watcherSession } from './session/saga';
import { watcherCompany } from './company/saga';
import { watcherSavedList } from './SavedList/saga';

export function* rootSaga() {
  yield all([watcherSession(), watcherCompany(), watcherSavedList()]);
}
