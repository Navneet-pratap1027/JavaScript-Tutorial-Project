/*
1. Write a for loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". Store all teas before "chai" in a new array named selectedTeas.
*/

/* let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i=0; i<teas.length; i++){
    if(teas[i]==="chai"){
        break;
    }
    selectedTeas.push(teas[i])
}
//  console.log(selectedTeas);
 */
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (const tea of teas) {
    if (tea === "chai") {
        break;
    }
    selectedTeas.push(tea);
}

// console.log(selectedTeas);
/*
2. Write a for loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named visitedCities.
*/
let cities = ["London", "New York", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "paris" || cities[i] === "Paris") {
        continue;
    }
    visitedCities.push(cities[i]);

}

// console.log(visitedCities);




/*
3. Use a for-of loop to iterate through the array [1, 2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);


}
// console.log(smallNumbers);

/*
4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". Store the other teas in an array named preferredTeas`.
*/

let teaslist = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const num of teaslist) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}


    /* 5. Use a for-in loop to loop through an object containing city populations.
Stop the loop when the population of "Berlin" is found and store all previous
cities' populations in a new object named cityPopulations.
*/

let citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
};

let cityPopulations = {};

for (let city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityPopulations[city] = citiesPopulation[city];
}

// console.log(cityPopulations);

 
/*6.  Use a for-in loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named largeCities.
let worldCities = {
"Sydney":
5000000,
"Tokyo":
9000000,
"Berlin":
3500000,
"Paris": 2200000
};
 */
let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
};

let largeCities = {};

for (let city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue; 
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/* 7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"].Stop the loop when "chai" is found, and store all previous tea types in an array named availableTeas
 */



/* Syntax
array.forEach(element => {
    
}); */



let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function(tea) {
    if (tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});
// console.log(availableTeas);


/* 8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydney" and store the other cities in a new array named traveledCities`. */

let myWorldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

myWorldCities.forEach((city) => {
    if (city === "Sydney") {
        return;
    }
    traveledCities.push(city);
})




});

console.log(traveledCities);

I