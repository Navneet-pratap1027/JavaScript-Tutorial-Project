/* function multipleBy5(num){
    return num*5
}

multipleBy5.power=2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);//

function createUser(username,score){ 
    this.username=username
    this.score=score
}
createUser.prototype.increment= function (){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
    
}
const chai = new createUser("chai",25)
const tea =  createUser("tea",250)

chai.printMe()
 */



/* Here's what happens behind the scenes when the new keyword is used: A new object is created: The new keyword initiates the creation of a new JavaScript object. 

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.


The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned. */



 let myName = "Navneet   "
 let myChannel = "creator  "

 console.log(myName.trueLength);


 let myHeros=["thor, spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log (`Spidy power is ${this.spiderman}`);
        }
    } 

    Object.prototype.navneet = function(){
        console.log (`navneet is present in all objects`);
       }

        heroPower.navneet();//
        myHeros.navneet()
 


 /* #### Inhertance ##### OUTDATED WAY        
const User={
    name: "Navneet",
    email:navneet@google.com
}       

const Teacher ={
    makeVideo: true
}  

const TeachingSupport ={
    isAvailable: false
}

const TASupport ={
    makeAssignement: 'JS assignemet',
    fillTime: true,
    __proto__: TeachingSupport

}

Teacher.__=User
 */
 // MODERN SYNTAX   

// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    //console.log (`${this}`);
    //console.log(`True length is: ${this.trim().length}`);

}
anotherUsername.trueLength()

"Navneet  ".trueLength()

"iceTea".trueLength()





           //##########   SUMMARY OF PROTOTYPE ##############



let computer = { cpu: 12 };
let lenovo = {
    screen: "HD",
    _proto_: computer,
};
let tomHardware = {};
//console.log(lenovo, lenovo. _proto_);// outdatedway


let genericCar = {tyres: 4}
let tesla = {
    driver: "AI"
}
Object.setPrototypeOf(tesla, genericCar);
console.log(`tesla `, Object.getPrototypeOf(tesla));


