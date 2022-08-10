const KEY = '29141381-76438ddf2d97e3e41caa7b64b';

const getImage = (query, page) =>
  fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(responce => responce.json());

export default getImage;
