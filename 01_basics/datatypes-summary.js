// PRIMITIVE

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

let balance = 120;
let anotherBalance = new Number(120);// bad practice

// console.log(typeof balance);// number
// console.log(typeof anotherBalance);// object


// null and undefined

// let firstname;
// console.log(firstname);// undefined

let firstname = null;
// console.log(firstname);// null


const score =100
const scorevalue =1000.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;// (undifined)

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

// Reference (non primitive)

// Array, Objects, Functions

const fruits = ["apple" ,"banana", "graphes"];
let myObject ={
    name: "Navneet",
    age: 22,
}

// console.log(myObject.name);
//console.log(`Name: ${myObject.name}, Age: ${myObject.age}`);

const username={
    "first name": "Navneet",// first name have a space
    isLoggedIn: true,
}
 console.log(username["first name"]);

const myFunction = function(){
    console.log("Hello world");
}

//  console.log(typeof myFunction);

//  #########################################################################################

// stack (primitive) ,Heap (Non-primitive)

let myYoutubename = "Creatordotcom"

let anothername = myYoutubename

anothername = "chaiaurcode"

// copy the stored variable

// console.log(myYoutubename);
// console.log(anothername);

let userOne ={
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email="navneet@google.com"
// use refrence of stored variable
// console.log(userOne.email);
// console.log(userTwo.email);