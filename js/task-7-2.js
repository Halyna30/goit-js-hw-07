const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

// const li1 = document.createElement('li');
// li1.textContent = 'Картопля';
// const li2 = document.createElement('li');
// li2.textContent = 'Гриби';
// const li3 = document.createElement('li');
// li3.textContent = 'Часник';
// const li4 = document.createElement('li');
// li4.textContent = 'Помідори';
// const li5 = document.createElement('li');
// li5.textContent = 'Зелень';
// const li6 = document.createElement('li');
// li6.textContent = 'Приправи';

// const ul = document.querySelector('#ingredients');
// console.log(ul);
// ul.append(li1, li2, li3, li4, li5, li6);

const ul = document.querySelector('#ingredients');
ingredients.forEach(element => {
  const list = document.createElement('li');
  list.textContent = element;
  ul.append(list);
});
console.log(ul);
