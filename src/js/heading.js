// Scroll event
let tp = [];
window.addEventListener('scroll', () => {
  let scrollLocation = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
  let cat = document.querySelector('.header__bg__cat');
  let header = document.querySelector('.header');
  let nav = document.querySelector('.nav');

  if (scrollLocation === 0) {
    // 스크롤 top에 닿아있는 경우
    header.classList.add('is-top');
    header.classList.add('is-top');
    header.style.transform = 'translateY(-100%)';
  } else {
    header.classList.remove('is-top');
    header.classList.remove('is-top');
    header.style.transform = 'translateY(0)';
  }

  if (tp[tp.length - 1] > scrollLocation) {
    // 고양이 뒤돌아서 간경우
    cat.style.transform = 'scaleX(1)';
    tp = [];
  } else {
    // 고양이 앞으로 간경우
    cat.style.transform = 'scaleX(-1)';
    tp = [];
  }
  tp.push(scrollLocation);
  cat.style.left = (scrollLocation / fullHeight + 0.05) * 100 + '%';
});
