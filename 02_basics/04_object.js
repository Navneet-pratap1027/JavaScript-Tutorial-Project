// const instaUser = new Object() // singalton object

const instaUser = {}

instaUser.id = "123765"
instaUser.name = "qwerty"
instaUser.isLoggedIn = false

// console.log(instaUser);

const regularUser = {
    fullname: {
        userfullname: {
            firstname: "Navneet",
            lastname: "Pratap"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "g", 6: "e"}

// const obj3 = {obj1, obj2 }

// const obj4 = Object.assign({}, obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2}
// console.log(obj4);