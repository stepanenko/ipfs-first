
const meals = [
  { description: 'Breakfast', calories: 460 },
  { description: 'Snack', calories: 180 },
  { description: 'Lunch', calories: 610 },
  { description: 'Apples', calories: 122 },
  { description: 'Water', calories: 5 }
];

const app = document.getElementById('app');
const table = document.getElementById('table');

function cell(tag, classes, value) {
  const elem = document.createElement(tag);
  elem.classList = classes;
  elem.innerText = value;
  return elem;
}

function headerRow(titleArray) {
  const tr = document.createElement('tr');
  tr.append(
    cell('th', 'pa2 tl', titleArray[0]),
    cell('th', 'pa2 tr', titleArray[1])
  );
  return tr;
}

function mealHeader(titleArray) {
  const thead = document.createElement('thead');
  thead.appendChild(headerRow(titleArray));
  return thead;
}

function mealRow(classes, meal) {
  const tr = document.createElement('tr');
  tr.classList = classes;
  tr.append(
    cell('td', 'pa2', meal.description),
    cell('td', 'pa2 tr', meal.calories)
  );
  return tr;
}

function totalRow(meals) {
  const tr = document.createElement('tr');
  const total = meals.reduce((acc, meal) => acc + meal.calories, 0);
  tr.classList = 'bt b';
  tr.append(
    cell('td', 'pa2 tr', 'Total:'),
    cell('td', 'pa2 tr', total)
  );
  return tr;
}

function mealsBody(meals) {
  const rows = meals.map(meal => mealRow('stripe-dark', meal));
  const tbody = document.createElement('tbody');
  tbody.append(...rows, totalRow(meals));
  return tbody;
}

function mealsTable(...content) {
  const table = document.createElement('table');
  table.classList = 'mw5 center w-100 collapse';
  table.append(...content);
  return table;
}

app.appendChild(mealsTable(
  mealHeader(['Meals', 'Calories']),
  mealsBody(meals)
));
