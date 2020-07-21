import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

// watcher saga -> actions -> worker saga
function* rootSaga() {
  yield all([imagesSaga(), statsSaga()]);
}

export default rootSaga;
