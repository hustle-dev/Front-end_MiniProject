$(function () {
  let cnt = 0;

  let itemBars = document.querySelectorAll('.survey__item--line');
  let i = 0;

  let leftPic = [
    ['dog1', '개'],
    ['city', '도시'],
    ['human', '사람'],
  ];
  let rightPic = [
    ['cat1', '고양이'],
    ['country', '시골'],
    ['animal', '동물'],
  ];

  $('.survey__select').click(function () {
    $(this).addClass('selected');
    $(this).css('transform', 'translateY(-300px)');
    $(this).css('opacity', '0');
    $('.survey__select').not('.selected').css('transform', 'translateY(300px)');
    $('.survey__select').not('.selected').css('opacity', '0');
    let select = $(this).children('.survey__img').children('img').attr('alt');
    let non_select = $('.survey__select')
      .not('.selected')
      .children('.survey__img')
      .children('img')
      .attr('alt');
    console.log(select);
    itemBars[i].setAttribute('data-first', select);
    itemBars[i].setAttribute('data-last', non_select);
    i++;

    setTimeout(function () {
      if (cnt === 3) {
        console.log('끝');
        $('.survey__result').css('display', 'flex');
      } else {
        $('.img1').attr('src', `../assets/images/${leftPic[cnt][0]}.jpg`);
        $('.img1').attr('alt', `${leftPic[cnt][1]}`);
        $('.img1').next().text(`${leftPic[cnt][1]}`);
        $('.img2').attr('src', `../assets/images/${rightPic[cnt][0]}.jpg`);
        $('.img2').attr('alt', `${rightPic[cnt][1]}`);
        $('.img2').next().text(`${rightPic[cnt][1]}`);
        cnt++;
      }
      $('.survey__select').css('opacity', '1');
      $('.survey__select').css('transform', 'translateY(0)');
    }, 1000);
    $(this).removeClass('selected');
  });
});
