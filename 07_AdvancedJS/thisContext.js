const person ={
    name:"Navneet",
greet(){
    console.log(`Hi, myself ${this.name}`);
},
};
person.greet();
 const greetFunction=person.greet
 greetFunction();// we can not transfer the referance to the another variable, it lost the context
 const greetbound= person.greet.bind({name: "Pratap"});
 greetbound();

 const person1 = { name: "Navneet" };
const person2 = { name: "Pratap" };

function introduce(age, city) {
    console.log(`Hi, I am ${this.name}, ${age} years old from ${city}`);
}

// call , bind , apply....


// -------- CALL --------
introduce.call(person1, 22, "Gorakhpur");  
// Hi, I am Navneet, 22 years old from Delhi

introduce.call(person2, 21, "Basti");  
// Hi, I am Pratap, 25 years old from Mumbai

// -------- APPLY --------
introduce.apply(person1, [22, "Gorakhpur"]);  
introduce.apply(person2, [21, "Basti"]);  

// -------- BIND --------
const introNavneet = introduce.bind(person1, 22, "Gorakhpur");  
const introPratap = introduce.bind(person2, 21, "Basti");  

// ab inko baad me kabhi bhi call kar sakte ho
introNavneet();  
introPratap();

// call → function turant run hota hai, args normal pass hote hain
// apply → function turant run hota hai, args array ke form me pass hote hain
// bind → function turant run nahi hota, new function return karta hai jisme this fix hota hai