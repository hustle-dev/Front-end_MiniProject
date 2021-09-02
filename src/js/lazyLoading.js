document.addEventListener('DOMContentLoaded', function () {
  let lazyloadImages;

  if ('IntersectionObserver' in window) {
    lazyloadImages = document.querySelectorAll('.lazy');
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove('lazy');
            imageObserver.unobserve(image);
          }
        });
      },
      {
        rootMargin: '100%',
      },
    );

    lazyloadImages.forEach(image => {
      imageObserver.observe(image);
    });
  } else {
    let lazyloadDebounceTimeout;
    lazyloadImages = document.querySelectorAll('.lazy');

    function lazyload() {
      if (lazyloadDebounceTimeout) {
        clearTimeout(lazyloadDebounceTimeout);
      }

      lazyloadDebounceTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset;
        lazyloadImages.forEach(img => {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length === 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 100);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  }
});
