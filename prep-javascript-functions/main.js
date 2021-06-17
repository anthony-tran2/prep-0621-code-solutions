function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var time = convertHoursToMinutes(3);
console.log(time);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('Anthony');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiply = addAndMultiplyBy5(2, 7);
console.log(addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivide = multiplyAndDivideBy5(10, 2);
console.log(multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(152, 72);
console.log(subtract);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(10);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Anthony', 'Tran');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(3);
console.log(cubed);
