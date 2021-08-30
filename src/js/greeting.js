// play button event
let play = document.querySelector('.greeting__button');
play.addEventListener('click', () => {
  let icon = document.querySelector('.play');
  let video = document.querySelector('.greeting__video');

  // 동영상 재생/멈춤
  let listCheck = false;
  for (let i = 0; i < icon.classList.length; i++) {
    if (icon.classList[i] === 'fa-play') {
      listCheck = true;
    }
  }
  if (listCheck) video.play();
  else video.pause();

  // 아이콘 모양 바꾸기
  icon.classList.toggle('fa-play');
});
