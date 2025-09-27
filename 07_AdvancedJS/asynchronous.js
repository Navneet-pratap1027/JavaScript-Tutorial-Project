/*  DEFAULT BEHAVIOUR
 Javascript is synchronous and single treaded language that mean it execute code one by one. */


 function sayHello() {
    console.log("I would like to say Hello");
}
setTimeout(() => {
    sayHello();
    }, 5000);
for (let index = 0; index < 10; index++) {
    console.log(index);
}
for(let index=0; index<10; index++){ 
    console.log(index);
} 

console.log("Navneet")

// OUTPUT

// I would like to say Hello ye last me print hoga, function phle hi kuy nhi likha ho

// JS ek single-threaded language hai (line by line chalti hai)
// setTimeout, fetch jaise kaam async hote hai (Web API handle karti hai)
// Time/event complete hone ke baad callback queue me jata hai
// Event loop tabhi chalata hai jab call stack khali hota hai
// Isliye pehle normal code chalega, baad me async ka output aayega
