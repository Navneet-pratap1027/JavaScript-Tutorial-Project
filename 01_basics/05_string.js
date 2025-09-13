const name ="Navneet"
const repoCount = 10

//console.log(name + repoCount + " value");//  (outdated way)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Navneet-ps')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf("v"));
// console.log(gameName.substring(0,4));
  
 // ############ or  ###########

const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-4)
const anotherString = gameName.slice(-7, -3)
// console.log(anotherString);

const newStringOne = "    Navneet   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url ="https://navneet.com/navneet%50pratap"
console.log(url.replace('%50','-'))

console.log(url.includes('navneet'))
console.log(url.includes('thought'))


