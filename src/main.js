import SimpleLightbox from 'simplelightbox';
import { requestForImg } from './js/pixabay-api';
import { createGalleryCard } from './js/render-functions';

const formSearchImg = document.querySelector('.form-search');
const galleryListImg = document.querySelector('.gallery');
const indicatorLoader = document.querySelector('.loader');

const galleryList = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt',
  overlayOpacity: 1,
});

indicatorLoader.classList.add('active');

const onFormSearchSubmit = evt => {
  evt.preventDefault();

  const inputWordSearch = evt.target.elements.search.value.trim();

  if (inputWordSearch === '') {
    return;
  }

  indicatorLoader.classList.remove('active');

  requestForImg(inputWordSearch)
    .then(data => {
      indicatorLoader.classList.add('active');
      const listGalleryImg = data.hits
        .map(imgInfo => createGalleryCard(imgInfo))
        .join('');
      galleryListImg.innerHTML = listGalleryImg;
      galleryList.refresh();
    })
    .catch(err => {
      console.log(err);
    });
};

formSearchImg.addEventListener('submit', onFormSearchSubmit);
