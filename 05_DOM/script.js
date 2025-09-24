// Example 1
// let hold = document.getElementById("changeTextButton");
// console.log(hold);


/* Important Point
document.getElementById("changeTextButton").addEventListener('click', () =>{
    console.log(this);// whenevr we use arrow function this points the global this which means window object.

}); */

document.getElementById("changeTextButton").addEventListener('click', function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent =" this paragraph is changed";
});

// Example 2

document.getElementById("highlightFirstCity").addEventListener('click', function(){
    let citieslist= document.getElementById("citiesList");
    (citieslist);
   citieslist.firstElementChild.classList.add("highlight");
//    console.log(citieslist.children[2]);// first aur last direct access kar skate hai aur koi aur karna ho toh children se karo

});

// Example 3


