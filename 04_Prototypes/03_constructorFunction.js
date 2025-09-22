function Person(name,age){
    this.name=name
     this.age=age
}

function Car(make,model){
    this.make=make;
    this.model=model;

}

let myCar =new Car("Toyota","Camry");
// console.log(myCar);  // node 04_Prototypes/03_constructorFunction.js

let myNewCar =new Car("Tata","Safari");
// console.log(myNewCar);


function Tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());


function Drink(name){
    if (!new.target){
        throw new Error("Drink must be called with new keyword");

    }
    this.name=name;
}

let tea = new Drink("tea");
let coffee = new Drink("coffee"); 