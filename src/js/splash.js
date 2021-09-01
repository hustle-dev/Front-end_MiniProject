const splash = document.querySelector('.splash');
const splashText = document.querySelector('.splash__text');

document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splash.classList.add('display-none');
    splashText.classList.add('display-none');
  }, 4000); // 4초 뒤 splash 없앰
});
