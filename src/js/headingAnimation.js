const heading = document.querySelectorAll('.headAnimation');
let timer;
const headingArr = [...heading];
function addClassHeading() {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      let scrollTop = window.pageYOffset;
      headingArr.forEach(head => {
        if (
          scrollTop + head.getBoundingClientRect().top <=
          window.innerHeight + scrollTop
        ) {
          head.classList.add('headingAnimation');
        }
      });
    }, 300);
  }
}
document.addEventListener('scroll', addClassHeading);
