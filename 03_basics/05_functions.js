/* 
1. Write a function named makeTea that takes one parameter, type0fTea, and returns a string like "Making green tea" when called with "green tea".
Store the result in a variable named tea0rder. */

function makeTea(type0fTea){
    return `Making ${type0fTea}`;
}
let teaOrder=makeTea("green tea"); 
// console.log(teaOrder)


/* 
2. Create a function named orderTea that takes one parameter, teaType. Inside this function, create another function named confirmOrder that returns a message like "Order confirmed for chai".Call confirmOrder from within orderTea`and return the result. */
/* 
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder()
} */
//let orderConfirmation = orderTea("chai");// 
// console.log(orderTea("chai"));




//   ==>>  ################### THIS AND ARROW FUNCTION ##################3
/* 
const user ={
    username: "Navneet",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

user.welcomeMessage()
user.username ="sam"
user.welcomeMessage()
//  console.log(this);

/* function chai(){
    let username = "Navneet"
    console.log(this.username);
}
chai()
 */

 const addTwo =(num1,num2) =>{
   
    return num1+num2
    
} 
// console.log(addTwo(6,7))
 

/*
3. Write an arrow function named calculateTotal that takes two parameters: price and quantity. The function should return the total cost by multiplying the price and quantity.Store the result in a variable named totalCost.
*/
// const calculateTotal = ( price,quantity)=>price*quantity // (explicit way of writting in one line)
    
const calculateTotal = ( price,quantity)=>{
    return price*quantity

}
let totalCost= calculateTotal(399 ,10)
console.log(totalCost);



/* 
4. Write a function named processTeaOrder that takes another function, makeTea makeTea, as a parameter and calls it with the argument "earl grey".Return the result of calling makeTea. */

// Pehle ek function banate hain jo chai banata hai
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

// Ab ek function jo makeTea ko parameter ke roop me accept kare
function processTeaOrder(makeTea) {
    // "earl grey" pass karke call karte hain
    return makeTea("earl grey");
}

// Call kar ke dekhte hain
let order = processTeaOrder(makeTea);
console.log(order); // Output: Making earl grey

/*
5. Write a function named createTeaMaker that returns another function. The returned function should take one parameter, teaType, and return a message like "Making green tea".Store the returned function in a variable named teaMaker and call it with "green tea".
*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType}`;
    }
}
let teaMaker= createTeaMaker()

console.log(teaMaker("greentea"));



/* function createTeaMaker(name) {
  let score = 100;   // ek local variable

  return function (teaType) {
    return Making ${teaType} ${name} ${score};
  };
}


let teaMaker = createTeaMaker("Navneet");  
let result = teaMaker("green tea");

console.log(result); */  


/* Jab ek inner function apne outer function ke variables ko yaad rakhta hai aur unhe baad me use kar sakta hai, chahe outer function return ho chuka ho   => CLOSURE BEHAVIOUR*/
