var person = { firstName: 'Anthony', lastName: 'Tran', hobby: 'Playing Video Games' };
console.log(person);

var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'Unemployed';
console.log("The person's current job is:", person.job + '.');

person.previousJob = 'Panda Express Counter Help';
console.log("The person's previous job is:", person.previousJob + '.');

console.log('The complete person object:', person);
