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

 // console.log("Result:", result);

// function loginUserMessage(username){
 //   return `${username} just logged in`
// }
 // console.log(loginUserMessage("Navneet"))
  // console.log(loginUserMessage(""))// then it print simply just logged in because of empty string..
 //  console.log(loginUserMessage())// if we not give any value it print undefined

    function loginUserMessage(username = "sam"){// we can pass any default value here ,so never go to undefined case
        if (username===undefined){// if (username===undefined) = if (!username){both are same}
            console.log("Please enter a username");
            return
        }
    return `${username} just logged in`
 }
 console.log(loginUserMessage())// if we dont pass any value print sam default case ,if we pass any value it overwrite that value.. 