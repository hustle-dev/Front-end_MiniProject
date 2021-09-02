let buttons = document.getElementsByClassName('register__hashbutton');
let textarea = document.getElementById('Explain');
let map = new Map();

for (let button of buttons) {
  button.addEventListener('click', function () {
    let str = button.getAttribute('data-label');
    if (!map.has(str)) {
      textarea.innerHTML += str;
      map.set(str, 1);
      button.setAttribute('background-color', '#000');
    }
  });
}
