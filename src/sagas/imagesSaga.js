import { takeEvery, select, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setImageError } from '../actiions';

export const getPage = state => state.nextPage;

export function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    // dispatch error action
    yield put(setImageError(error.toString()));
  }
}

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
