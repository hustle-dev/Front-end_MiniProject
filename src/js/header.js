// Scroll event
let tp = [];
window.addEventListener("scroll", () => {
  let scrollLocation = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x
  let cat = document.querySelector(".header__bg__cat");

  if (tp[tp.length - 1] > scrollLocation) {
    // 고양이 뒤돌아서 간경우
    cat.style.transform = "scaleX(1)";
    tp = [];
  } else {
    // 고양이 앞으로 간경우
    cat.style.transform = "scaleX(-1)";
    tp = [];
  }
  tp.push(scrollLocation);
  cat.style.left = (scrollLocation / fullHeight + 0.05) * 100 + "%";
});

// menu button event
let menu = document.querySelector(".header__menu");
let navList = document.querySelector(".nav__list");
let close = document.querySelector(".nav__close");
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  navList.classList.toggle("is-active");
});
close.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  navList.classList.toggle("is-active");
});
