function sayMyName(){
    console.log("N");
     console.log("A");
    console.log("V");
    console.log("N");
    console.log("E");
    console.log("E");
    console.log("T");
   
}
// sayMyName()// execute the function

// function addTwoNum (num1,num2){
//    console.log(num1+num2);
   
// }

function addTwoNum (num1,num2){
    let result= num1+num2
    return result// after return, we cannot print anything...
   
}
 // addTwoNum(4,8)
 const result = addTwoNum(4,8)// we can store in a variable

 console.log("Result:", result);