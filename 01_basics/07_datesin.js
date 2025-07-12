//  Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 25)// months started from zero in java script
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2025, 0, 25 ,5 ,7)
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("01-05-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.round(Date.now()/1000));

let newDate =new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getHours());

// `${newDate.getDay()} and the time`

newDate.toLocaleString("default", {
    weekday: "long"
})