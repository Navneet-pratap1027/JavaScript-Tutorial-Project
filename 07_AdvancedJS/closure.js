function outer(){
    let counter =4;
    return function(){
        counter++;
        return counter;
    };
}
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());

//  Closure: jab ek inner function apne outer function ke variables ko yaad rakhta hai