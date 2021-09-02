document.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode;
  console.log('pushed key ' + e.key);
  let focus = document.activeElement.className;

  if (keyCode == 13) {
    // Enter key
    console;
    if (focus === 'register__item--upload') {
      $('#File').trigger('click');
    }
  }
});
