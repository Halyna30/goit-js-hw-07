const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listIngr = ingredients.map(element => {
  const ingredientRef = document.createElement('li');
  ingredientRef.textContent = element;
  return ingredientRef;
});
const ul = document.querySelector('#ingredients');
ul.append(...listIngr);
