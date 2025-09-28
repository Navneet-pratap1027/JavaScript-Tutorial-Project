const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
// DB calls, cryptography, network
setTimeout(function() {
    console.log('Async task is compelete');
    resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
});


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved");
})

const PromiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Navneet", email:"nav@gmail.com"})
    },1000)
})
PromiseThird.then(function(user){
    console.log(user);

})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Pratap", password:"1233"})
        }else{
            reject("ERROR: Something went wrong")
        }
        
    },1000)
})
PromiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);   
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolve or reject"));

const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"1233"})
        }else{
            reject("ERROR: Javascript went wrong")
        }      
    },1000)
})

/* async function consumePromiseFive(){
    const response = await PromiseFive
    console.log(response);
}
consumePromiseFive() */
// Agar promise reject ho toh await error throw karega, isliye try-catch lagana jaruri hai

async function consumePromiseFive(){
    try{
    const response = await PromiseFive
    console.log(response);
} catch (error){
    console.log(error)
}
}
consumePromiseFive()

/* async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E",error);
        
    }
} 
getAllUsers()
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()

})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))


// Course video content

function fetchData(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            let success =false;
            if (success){
                resolve("Data fetched sucessfully");
            } else {
                reject("Error fetching data");
            }
        },3000)

    });
}

// fetchData()
// .then((data) => console.log(data))
// .catch((error) => console.error(error));

fetchData()
 .then((data) => {
    console.log(data);
    return `Navneet`;
 })
 .then ((value) => {
    console.log(value);
})
.catch ((error) => console.error(error));// chaining of then

