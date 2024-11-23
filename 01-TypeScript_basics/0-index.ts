// learning the datatypes in TS
// let myName ="Bob"
// myName = 5 


// manual typing
// Built-in types
let anotherName: string = "bob"
let numberOfWheels: number = 4 
let isStudent: boolean = false

console.log("random str", anotherName)
console.log("random str", numberOfWheels)
console.log("random str", isStudent)


// Defining Custom Types : - by convention first letter must be a capital letter


// here we have created a custom type Food and then use it to assign a var favoriteFood
type Food  = string
let favoriteFood: Food = "pizza"
console.log("favoriteFood", favoriteFood)


// this was very trival and not useful But this is come handy while creating 
// a Object

let person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person1 = {
    name : "Jill",
    age: 66, 
    isstudent: false  // you can notice that is no error even thought I'm using "s"
}

console.log(person, person1)

//// So, these cases we can create a custom type for consistencty. 
// we can create a custom type of an object which defines the shape of object.
// where we can give the exact property names are

type Person  = { 
    name: string, 
    age : number, 
    isStudent : boolean
}

let person10: Person = {
    name: "Shubam",
    age: 54, 
    isStudent : false
}


console.log(person10)




