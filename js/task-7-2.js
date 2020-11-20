const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

ingredients.forEach(element => {
  const list = document.createElement('li');
  list.textContent = element;
  const ul = document.querySelector('#ingredients');
  ul.append(list);
});
