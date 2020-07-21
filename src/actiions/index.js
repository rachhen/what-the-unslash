import { IMAGES, STATS } from '../constants';

export const loadImages = () => ({
  type: IMAGES.LOAD,
});

export const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images,
});

export const setImageError = error => ({
  type: IMAGES.LOAD_FAIL,
  error,
});

export const loadImageState = () => ({
  type: STATS.LOAD,
});

export const setImageState = (id, downloads) => ({
  type: STATS.LOAD_SUCCESS,
  id,
  downloads,
});

export const setImageStateError = id => ({
  type: STATS.LOAD_FAIL,
  id,
});
