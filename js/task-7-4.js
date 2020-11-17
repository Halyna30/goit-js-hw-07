const counterValue = document.querySelector('#value');
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');

btnDec.addEventListener('click', onBtnDec);
btnInc.addEventListener('click', onBtnInc);

function onBtnDec() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

function onBtnInc() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
