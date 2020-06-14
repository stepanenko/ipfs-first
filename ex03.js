
const studentGrades = [
  { name: 'Joe', grade: 88 },
  { name: 'Jen', grade: 94 },
  { name: 'Steph', grade: 77 },
  { name: 'Allen', grade: 60 },
  { name: 'Gina', grade: 54 }
];

const messages = [
  'Excellent Job',
  'Nice Job',
  'Well done',
  'What happened',
  'Not good'
];

function getFeedback(messages) {
  return function (student) {
    if (student.grade >= 90 ) message = messages[0];
    else if (student.grade >= 80) message = messages[1];
    else if (student.grade >= 70) message = messages[2];
    else if (student.grade >= 60) message = messages[3];
    else message = messages[4];
    return `${message} ${student.name}, you got ${student.grade}`;
  }
}

const joeFeedback = getFeedback(messages)({ name: 'Joe', grade: 33 });
console.log(joeFeedback);  // Not good Joe, you got 33

const studentsFeedback = studentGrades.map(getFeedback(messages));
console.log(studentsFeedback);

