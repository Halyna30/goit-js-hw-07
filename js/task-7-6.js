const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.dataset.length);

inputRef.addEventListener('blur', checkValid);

function checkValid() {
  if (dataLength === inputRef.selectionEnd) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
}
