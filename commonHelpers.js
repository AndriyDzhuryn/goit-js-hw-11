import{i as n,S as l}from"./assets/vendor-96ed78f5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const d=t=>fetch(`https://pixabay.com/api/?key=45515409-71b0c278136f92467ce3b8485&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>(r.hits.length===0&&n.error(m),r)),m={title:"ERROR",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"},p=t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="container-description">
    <div class="container-description-img">
      <h3 class="title-description-img">Likes</h3>
      <p class="description-img">${t.likes}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Views</h3>
      <p class="description-img">${t.views}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Comments</h3>
      <p class="description-img">${t.comments}</p>
    </div>
    <div class="container-description-img">
      <h3 class="title-description-img">Downloads</h3>
      <p class="description-img">${t.downloads}</p>
    </div>
  </div>
</li>`,u=document.querySelector(".form-search"),g=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new l(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});a.classList.add("active");const y=t=>{t.preventDefault();const r=t.target.elements.search.value.trim();r!==""&&(a.classList.remove("active"),d(r).then(s=>{a.classList.add("active");const o=s.hits.map(e=>p(e)).join("");g.innerHTML=o,h.refresh()}).catch(s=>{console.log(s)}))};u.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
