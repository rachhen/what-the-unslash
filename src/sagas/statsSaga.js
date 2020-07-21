import { take, fork, put, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageState, setImageState, setImageStateError } from '../actiions';

function* handleStatsRequest(id) {
  try {
    yield put(loadImageState(id));
    const res = yield call(fetchImageStats, id);
    yield put(setImageState(id, res.downloads.total));
    return true;
  } catch (e) {}
  yield put(setImageStateError(id));
}

function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);
    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;
