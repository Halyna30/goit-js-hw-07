const inputRef = document.querySelector('#name-input');
const nameLabelRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputChangeName);

function inputChangeName(event) {
  nameLabelRef.textContent = event.target.value;
}
