const score =400
// console.log(score);

const balance =new Number(100)
// console.log(balance);

// console.log(balance.toString());// (here number is converted into string)...
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));// used for precision value in ecommerce website mostly...


const otherNumber =23.8966
// console.log(otherNumber.toPrecision(3));

const number =1000000
// console.log(number.toLocaleString());// comma according US value standard..
// console.log(number.toLocaleString('en-IN')); // comma according Indian value standard..

// ################### ...MATHS..##############

// console.log(Math);
// console.log(Math.abs(-5)); // (absolute value means it convert negative value into positive , but vice-versa is not true..)
// console.log(Math.round(4.9));
// console.log(Math.max(4,5,2,8));
// console.log(Math.min(4,5,2,8));

console.log(Math.random());// (used to display random number, between 0 and 1)
console.log((Math.random()*10) + 1); // (here multiply by 10 to shift one digit in left side, and add 1 for giving value 1 to 9)
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1))+min)// range define
