// ============================================= Функції для елементів інтерфейсу
export const createGalleryCard = imgInfo => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${imgInfo.largeImageURL}">
    <img
      class="gallery-image"
      src="${imgInfo.webformatURL}"
      alt="${imgInfo.tags}"
    />
  </a>
  <div class="container-description">
    <div class="container-description-img">
      <h3 class="title-description-img">Likes</h3>
      <p class="description-img">${imgInfo.likes}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Views</h3>
      <p class="description-img">${imgInfo.views}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Comments</h3>
      <p class="description-img">${imgInfo.comments}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Downloads</h3>
      <p class="description-img">${imgInfo.downloads}</p>
    </div>
  </div>
</li>`;
};
