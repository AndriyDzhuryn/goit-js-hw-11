import iziToast from 'izitoast';
// ====================================== Функції для HTTP-запитів
export const requestForImg = wordSearch => {
  return fetch(
    `https://pixabay.com/api/?key=45515409-71b0c278136f92467ce3b8485&q=${wordSearch}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(resolve => {
      if (!resolve.ok) {
        throw new Error(resolve.status);
      }
      return resolve.json();
    })
    .then(emptyInput => {
      if (emptyInput.hits.length === 0) {
        iziToast.error(errorInputEmpty);
      }
      return emptyInput;
    });
};

const errorInputEmpty = {
  title: 'ERROR',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  position: 'topRight',
};
