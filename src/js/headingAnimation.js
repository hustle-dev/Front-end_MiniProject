const heading = document.querySelectorAll('.headAnimation');
let timer;
const headingArr = [...heading];
console.log(
  headingArr[0].getBoundingClientRect().top,
  headingArr[1].getBoundingClientRect().top,
);
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
          console.log('hi');
        }
      });
    }, 100);
  }
}
document.addEventListener('scroll', addClassHeading);
