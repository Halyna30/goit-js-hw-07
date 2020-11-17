// Ви маєте масив категорій.
const liRef = document.querySelectorAll('.item');
console.log(`У списку ${liRef.length} категорії.`);
// Викликаєте на ньому метод forEach.
// Параметром колбек функції цього методу буде окрема категорія.
const result = liRef.forEach(category => {
  // Звернутися до її заголовка можна так: category.querySelector('h2').
  const li = category.querySelector('h2');
  // Запишіть результат цього звернення в перемінну, яку потім підставте в шаблонний
  // рядок(не забудьте при цьому додати.textContent), який будете консолити.
  console.log(`Категорія: ${li.textContent}`);
  const element = category.querySelectorAll('li');
  console.log(`Кількість елементів: ${element.length}`);
});
