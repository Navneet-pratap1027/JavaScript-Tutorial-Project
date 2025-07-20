// var c = 400
let a= 100
if (true){
    let a = 10
const  b = 20
// console.log("INNER: ",a);
// var c = 60//why we are not using var

}

//console.log(a);
// console.log(b);
// console.log(c);

// difference between global and block scoopes

function one(){
    const username = "Navneet"

    function two(){
        const website = "youtube"
        console.log(username);
    }

   // console.log(website);

    two()
}

//one()

if (true) {
    const username = "Navneet"
    if (username === "Navneet"){
        const website = " youtube"
       // console.log(username+website);
    }

    // console.log(website);// outside the scopes
}

// console.log(username); // outside the scopes


// ###################  INTERESTING   ######################
console.log(addone(5))// here in this type function decleartion we can return function here also..
function addone(num){
    return num + 1
}

addtwo(5)
const addtwo = function(num){  // here in this type function decleartion we can not return function here it reflect error because we store that function inside  a variable..
    return num + 2
}


