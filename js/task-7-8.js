const divRef = document.querySelector('#controls');
const inputRef = document.querySelector('input');
const divBoxRef = document.querySelector('#boxes');
const btnRenRef = document.querySelector('[data-action="render"]');
const btnDesRef = document.querySelector('[data-action="destroy"]');

btnRenRef.addEventListener('click', handleCreateBtnClick);
btnDesRef.addEventListener('click', handleDestroyBtnClick);

function handleCreateBtnClick() {
  const boxesAmount = inputRef.value;

  createBoxes(boxesAmount);

  inputRef.value = '';
}

function handleDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  const boxesArr = [];
  let boxWidth = 20;
  let boxHeight = 20;

  for (let i = 0; i < amount; i += 1) {
    const boxRef = document.createElement('div');

    boxWidth += 10;
    boxHeight += 10;

    boxRef.style.width = `${boxWidth}px`;
    boxRef.style.height = `${boxHeight}px`;
    boxRef.style.backgroundColor = generateBoxColor();

    boxesArr.push(boxRef);
  }

  divBoxRef.append(...boxesArr);
}

function generateBoxColor() {
  const boxColor = `rgb(
      ${Math.random() * 255},
      ${Math.random() * 255},
      ${Math.random() * 255}
  )`;

  return boxColor;
}

function destroyBoxes() {
  while (divBoxRef.firstChild) {
    divBoxRef.removeChild(divBoxRef.firstChild);
  }
}
