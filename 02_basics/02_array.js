const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);// print third elment of array of array

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]// (spread work similar like concat but here we can spread more than 2 arrys)
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)// we can use real depth value of array or bracket use instead of infinity,
                                                             //  but Infinity  count automatic all depth value 
// console.log(real_another_array);

// console.log(Array.isArray("Navneet"))// (ask as a question is this is a array or not)
 console.log(Array.from("Navneet"))// (convert directly into array)

  console.log(Array.from("Navneet","pratap"))// from cannot convert because , from always accept single array,string or set

// console.log(Array.from({name: "navneet", age: 21}))// object cannot convert directly into array


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.from([score1,score2,score3]));

  console.log(Array.of(score1,score2,score3));// same work like from here...