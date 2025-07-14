// ARRAY

const myArr = [2,3,4,5,6,7,8]
const myFruits = ["apple","banana","graphes","pineapple"]

const myArr2 =new Array(6,5,4,2,3,6,8)
// console.log(myArr[4]);

// ARRAY METHODS

// myArr.push(9)
// myArr.push(10)
// myArr.pop()

// myArr.unshift(1)// (add any element in starting position of array)
// myArr.shift()


// console.log(myArr.includes(18));// (to check this element is included or not in the array)
// console.log(myArr.indexOf(4));

// const newArr =myArr.join()// add all element and convert it into string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// SLICE , SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)// include range(last value) ,and it also make change in orginal array
                                 // output after splice operation => [ 3, 4, 5 ]
                                //  change in orginal array => C  [ 2, 6, 7, 8 ]=> it remove the element from orginal array..
console.log(myn2);
console.log("C ", myArr);
