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

document.getElementById("changeOrder").addEventListener("click", function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="Espresso";
    coffeeType.style.backgroundColor="brown";

});

// Example 4

document.getElementById("addNewItem").addEventListener("click",function(){

    let newItem = document.createElement('li')
    newItem.textContent='Eggs'
    document.getElementById("shoplistping").appendChild(newItem);
});

// Example 5


document.getElementById("removeLastTask").addEventListener("click",function(){
    let tasklist= document.getElementById("taskList");
    tasklist.lastElementChild.remove();
});

//Example 6

document.getElementById("clickMeButton").addEventListener("click",function(){
    alert("Submit");
});

//Example 7


document.getElementById("teaList").addEventListener('click', function(event){
     if(event.target){
        alert("You selected: " + event.target.textContent);
    }
    });

/* document.getElementById("teaList").addEventListener('click', function(event){
    //console.log(event.target)
     if(event.target && event.target.matches(".teaItem")){
        alert("You selected: " + event.target.textContent);// best practice
    }
}); */


//Example 8

