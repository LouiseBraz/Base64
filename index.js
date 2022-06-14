let message = document.getElementById('message');
let button = document.getElementById('button');
let radioButton = document.querySelector('.radioButton');
let codificar = document.getElementById('codeRadio');
let decodificar = document.getElementById('decodeRadio');
let output = document.getElementById('output');

function base64(message) {
  if (codificar.checked) {
    return btoa(message);
  }
  if (decodificar.checked) {
    return atob(message);
  }   
  return "";
}

button.addEventListener("click", function (event) {
  let message = document.getElementById('message').value;
  if (message) {
    event.preventDefault();
    output.value = base64(message);
  }
});