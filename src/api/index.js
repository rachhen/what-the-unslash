const key = '81rd6tIo89TvBmGah-QIrD3KuC_bdXGslrhMGhGUIcE';
const URL = `https://api.unsplash.com/photos`;

const fetchImages = async page => {
  const response = await fetch(
    `${URL}?client_id=${key}&per_page=11&page=${page}`,
  );
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/${id}/statistics?client_id=${key}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages, fetchImageStats };
