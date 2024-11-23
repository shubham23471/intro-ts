// this is telling TS that 
// ages is of type array which only consist of numbers
let ages: number[] = [100, 10]

// try to push somthing that is not of correct datatype
ages.push('bla')


type Person= {
    name: string, 
    age: number, 
    isStudent: boolean
}


let person1: Person = {
    name: 'person1',
    age : 21, 
    isStudent: true
}

let person2: Person = {
    name: 'person2',
    age: 13, 
    isStudent: false
}

let person3: Person = {
    name: 'person3',
    age: 44, 
    isStudent: true
}

let peoples1  = [person1, person2, person3] // TS will automatically infer the type
let peoples: Person[]  = [person1, person2, person3] // here we are manully do it 

// same thing with another syntax 
let peoples2: Array<Person> = [person1, person2]