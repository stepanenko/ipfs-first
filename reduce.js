
const numbers = [1, 2, 3];

const avg = numbers.reduce((acc, num) => {
  // return acc.push(num);   // TypeError: acc.push is not a function
  return acc.concat(num);
}, [0]);

console.log(avg);   // [ 0, 1, 2, 3 ]