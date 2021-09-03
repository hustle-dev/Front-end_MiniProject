document.addEventListener('keydown', function (e) {
  const keyCode = e.keyCode;
  let focus = document.activeElement.className;

  if (keyCode == 13) {
    // Enter key
    if (focus === 'register__item--upload') {
      $('#File').trigger('click');
    }
  }
});
