
let count = 0;

const app = document.getElementById('app');

function createCountEl(title, count) {
  const div = document.createElement('div');
  const label = document.createElement('span');
  const p = document.createElement('p');
  label.innerText = title;
  p.id = 'count';
  p.innerText = count;
  p.style.display = 'inline-block';
  p.style.paddingLeft = '7px';
  div.append(label, p);
  return div;
}

function createButton(name, action) {
  const btn = document.createElement('button');
  const p = document.getElementById('count');
  btn.innerText = name;
  btn.style.cssText = `
    margin: 5px;
    color: white;
    padding: 6px 16px;
    background: grey;
    border: none;
    cursor: pointer;
  `;
  btn.addEventListener('click', () => {
    action();
    p.innerText = count;
  });
  return btn;
}


app.appendChild(createCountEl('Count:', count));
app.append(
  createButton('Plus', () => count++),
  createButton('Minus', () => count--)
);
