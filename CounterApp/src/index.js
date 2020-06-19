
const initModel = 0;
const MSGS = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT'
}

function view(dispatch, model) {
  const div = document.createElement('div');
  const div2 = document.createElement('div2');
  div2.innerText = `Count: ${model}`;
  div2.classList = 'mv2';
  div.appendChild(div2);
  div.append(
    createButton('pv1 ph2 mr2', '+', () => dispatch(MSGS.ADD)),
    createButton('pv1 ph2', '-', () => dispatch(MSGS.SUBTRACT))
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
  switch(msg) {
    case MSGS.ADD: return model + 1;
    case MSGS.SUBTRACT: return model - 1;
    default: return model;
  }
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
