import './sass/index.scss';
import './js/header.js';
import './js/lazyLoading';
import './js/setThumbnail';
import './js/gallery.js';
import './js/greeting.js';
import './js/modal.js';
import './js/splash';
import './js/hashbutton.js';
import './js/headingAnimation';
import './js/uploadButton';

if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
