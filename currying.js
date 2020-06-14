
function greet(msg) {
  return function(name) {
    console.log(`${msg}, ${name}!`);
  }
}
greet('Hello')('Serhiy');   // Hello, Serhiy!

const names = ['Jack', 'Joe', 'Bill'];

names.map(greet('Good morning'));

// Higher-order functions: greet, map

// Closures: msg
