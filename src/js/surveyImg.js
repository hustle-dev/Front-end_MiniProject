$(function () {
  let cnt = 0;
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
    if (cnt === 3) {
      console.log('끝');
    } else {
      $('.img1').attr('src', `../assets/images/${leftPic[cnt][0]}.jpg`);
      $('.img1').attr('alt', `${leftPic[cnt][1]}`);
      $('.img1>figcaption').text('hi');
      $('.img2').attr('src', `../assets/images/${rightPic[cnt][0]}.jpg`);
      $('.img2').attr('alt', `${rightPic[cnt][1]}`);
      cnt++;
    }
  });

  // $(this).addClass('selected');
  // $(this).css('transform', 'translateY(-300px)');
  // $(this).css('opacity', '-1');
  // $('.survey__select').not('.selected').css('transform', 'translateY(300px)');
  // $('.survey__select').not('.selected').css('opacity', '-1');

  // setTimeout(function () {
  //   console.log('시간이후');

  //   alert('실험');
  // }, 1000);
  // $(this).css('opacity', '0');
  // $('.survey__select')
  //   .not('.selected')
  //   .css('transform', 'translateY(-300px)');
  // $('.survey__select').not('.selected').css('opacity', '0');
});
