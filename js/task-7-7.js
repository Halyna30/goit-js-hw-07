const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', changeFontSize);

function changeFontSize() {
  spanRef.style.fontSize = `${inputRef.valueAsNumber}px`;
}
