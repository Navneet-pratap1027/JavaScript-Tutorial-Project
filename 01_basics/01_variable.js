const accountId =12345
let accountEmail="navneet@gamil.com"
var accountPassword ="8768"
accountCity = "gorakhpur"

// accountId=2// not allowed
accountEmail="nav@gmail.com"
accountPassword="456778"
accountCity="Basti"

console.log(accountId);

/* prefer not use of var
because of issue in block scope and functional scope*/
console.table([accountId,accountEmail,accountPassword,accountCity]);
