type Address = {
    street : string, 
    city: string,
    country: string
}

type NewPerson= {
    name: string, 
    age: number, 
    isStudent: boolean,
    address? : Address // making this optional  with "?"
}



let person12: NewPerson = {
    name: "shakya ",
    age: 54, 
    isStudent : false, 
    address : {
        street: "12 main",
        city: "Anytown",
        country: "USA"
    }
}

let person11: NewPerson = {
    name: "shakya ",
    age: 54, 
    isStudent : false
}


console.log(person11, person12)

// but making a property optional does reduced the type safety 
// for eg: 

function displayInfo(person){
    console.log(`${person.name} lives in ${person.address.city}`)
}

// displayInfo(person11)
// now as you can see there no warning for person11 
// you will get the type error
// TypeError: Cannot read properties of undefined (reading 'city')

// we can fix this using optional chaining 

function displayInfo2(person){
    console.log(`${person.name} lives in ${person.address?.city}`)
}

displayInfo2(person11) // shakya  lives in undefined
