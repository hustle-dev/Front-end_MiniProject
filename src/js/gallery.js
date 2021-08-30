// gallery
let gallery = document.querySelector('.gallery');
let slide = document.querySelector('.gallery__slide');
window.addEventListener('scroll', () => {
  let galleryPosition = gallery.offsetTop;
  let scrollLocation = document.documentElement.scrollTop;
  if (
    scrollLocation >= galleryPosition &&
    scrollLocation < galleryPosition + 4000
  ) {
    let percent = ((scrollLocation - galleryPosition) / 4000) * -90;
    slide.style.transform = 'translateX(' + percent + '%)';
  }
});
