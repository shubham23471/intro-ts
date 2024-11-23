// ******************************
//      Nested Object Types
// ******************************

type Person  = { 
    name: string, 
    age : number, 
    isStudent : boolean
    address: {
        street : string, 
        city: string,
        country: string
    }
}

let person10: Person = {
    name: "Shubam",
    age: 54, 
    isStudent : false
}

// after adding the address property you will get warning

let person11: Person = {
    name: "shakya ",
    age: 54, 
    isStudent : false, 
    address : {
        street: "12 main",
        city: "Anytown",
        country: "USA"
    }
}
console.log(Person11)

// Moving the nested type defination into out
type Address = {
    street : string, 
    city: string,
    country: string
}

type NewPerson= {
    name: string, 
    age: number, 
    isStudent: boolean,
    address: Address
}


let person12: Person = {
    name: "shakya ",
    age: 54, 
    isStudent : false, 
    address : {
        street: "12 main",
        city: "Anytown",
        country: "USA"
    }
}


