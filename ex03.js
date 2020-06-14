
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

// === solution with map ===

function getFeedback(messages) {
  return function (student) {
    if (student.grade >= 90) message = messages[0];
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

// === solution with reduce ===
function getFeedback2(messages) {
  return function (acc, student) {
    if (student.grade >= 90) message = messages[0];
    else if (student.grade >= 80) message = messages[1];
    else if (student.grade >= 70) message = messages[2];
    else if (student.grade >= 60) message = messages[3];
    else message = messages[4];
    return [...acc, `${message} ${student.name}, you got ${student.grade}`];
  }
}

const studFB = studentGrades.reduce(getFeedback2(messages), []);
console.log(studFB);


// === Moore's solution ===

const msg = {
  a: 'Excellent Job',
  b: 'Nice Job',
  c: 'Well done',
  d: 'What happened',
  f: 'Not good'
};

function letterGrade(points) {
  if (points >= 90) return 'a';
  else if (points >= 80) return 'b';
  else if (points >= 70) return 'c';
  else if (points >= 60) return 'd';
  else return 'f';
}

function feedBack(rules) {
  return function (student) {
    const grade = letterGrade(student.grade);
    const message = rules[grade];
    return `${message} ${student.name}, you got an ${student.grade}`;
  }
}

const jeffFeedback = feedBack(msg)({ name: 'Jeff', grade: 77 });
console.log(jeffFeedback);   // Well done Jeff, you got an 77

const result = studentGrades.map(feedBack(msg));
console.log(result);
