
const numbers = [1, 2, 3];

const avg = numbers.reduce((acc, num) => {
  // return acc.push(num);   // TypeError: acc.push is not a function
  return acc.concat(num);
}, [0]);

console.log(avg);   // [ 0, 1, 2, 3 ]

const grades = [95, 89, 34, 67, 38, 98, 45, 55, 87];

function sum(acc, num) {
  return acc + num;
}

const sumNum = grades.reduce(sum);

console.log(sumNum);   // 567

const gradesCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc = {}, num) {
  const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;
  if (num >= 90) {
    return { ...acc, a: a + 1 };
  } else if (num >= 80) {
    return { ...acc, b: b + 1 };
  } else if (num >= 70) {
    return { ...acc, c: c + 1 };
  } else if (num >= 60) {
    return { ...acc, d: d + 1 };
  } else {
    return { ...acc, f: f + 1 };
  }
}

console.log(gradesCount); // { a: 2, b: 2, f: 4, d: 1 }