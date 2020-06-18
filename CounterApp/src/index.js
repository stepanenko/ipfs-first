
let initModel = 0;

const app = document.getElementById('app');

function view(model) {
  const div = document.createElement('div');
  const div2 = document.createElement('div2');
  div2.id = 'count';
  div2.innerText = `Count: ${model}`;
  div2.classList = 'mv2';
  div.appendChild(div2);
  div.append(
    createButton('pv1 ph2 mr2', '+', () => update('plus')),
    createButton('pv1 ph2', '-', () => update('minus'))
  );
  return div;
}

function createButton(classes, name, action) {
  const btn = document.createElement('button');
  btn.innerText = name;
  btn.classList = classes;
  btn.style.cssText = `
    margin: 5px;
    color: white;
    padding: 6px 16px;
    background: grey;
    border: none;
    cursor: pointer;
  `;
  btn.addEventListener('click', () => action());
  return btn;
}

function update(msg) {
  const div2 = document.getElementById('count');
  div2.innerText = msg === 'plus'
    ? `Count: ${initModel = initModel + 1}`
    : `Count: ${initModel = initModel - 1}`;
}

app.appendChild(view(initModel));
