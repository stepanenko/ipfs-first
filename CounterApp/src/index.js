
const initModel = 0;

function view(dispatch, model) {
  const div = document.createElement('div');
  const div2 = document.createElement('div2');
  div2.innerText = `Count: ${model}`;
  div2.classList = 'mv2';
  div.appendChild(div2);
  div.append(
    createButton('pv1 ph2 mr2', '+', () => dispatch('plus')),
    createButton('pv1 ph2', '-', () => dispatch('minus'))
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

function update(msg, model) {
  return msg === 'plus' ? model + 1 : model - 1;
}

// impure code below:
function app(initModel, update, view, node) {
  let model = initModel;
  let currentView = view(dispatch, model);
  node.appendChild(currentView);
  function dispatch(msg) {
    model = update(msg, model);
    const updatedView = view(dispatch, model);
    node.replaceChild(updatedView, currentView);
    currentView = updatedView;
  }
}

const rootNode = document.getElementById('app');

app(initModel, update, view, rootNode);
