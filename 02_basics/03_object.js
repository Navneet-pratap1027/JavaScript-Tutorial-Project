// Singleton
// object.create

// object literals

const mySym = Symbol("key1")// decleration of symbol
const JsUser ={
    name: "Navneet",
    "full name": "Navneet Pratap",// we can't access this line by using dot method, we need to use sqr bracket
    [mySym]: "mykey1",
    age:18,
    location: "Gorakhpur",
    Email: "navneet@google.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday","Saturday"]
}

// console.log(JsUser.location)
// console.log(JsUser["location"])
// console.log(JsUser["full name"])// can't use dot method to access this...
// console.log(JsUser [mySym])


JsUser.Email = "pratap_google.com"// overwrite the email

// Object.freeze(JsUser)// freeze use for stop/lock the changes ...
JsUser.Email = "Nikhil_google.com"
// console.log(JsUser);

// adding function

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
 console.log(JsUser.greeting());
// console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());

