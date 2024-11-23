type Pizza = {
    id : number,
    name : string, 
    price : number
    }

type UserRole = "guest" | "member" | "admin"

type User = {
    username: string, 
    role: UserRole
}

const users: User[] = [
    {username: 'john_doe', role: "member"},
    {username: 'john_doe', role: "admin"},
    {username: 'guest_user', role: "guest"}
]

// : User => here we are explicity saying that 
// it should return a value of type User
function fetchUserDetails(username:string): User {
    const user = users.find(user => user.username === username)
    if (!user){
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

// ****************************
// typescript "any" type
// ****************************
// this means that are turning off the type-checking for that value. 

let value = 1
value.toUpperCase()//  this should give use warning


let value2 : any = 1
value2.toUpperCase() // not warnings here. 

// here we have explicity defined the return value from function
// (this function works in 00/index.ts file. check that file)
function getPizzaDetail2(identifier: string | number): Pizza  | undefined{
    if (typeof identifier === "string"){
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    }
    else if (typeof identifier === "number"){
        return menu.find(pizza => pizza.id === identifier)
    }
    else {
        throw new TypeError(`Parameter identifier must be string or number` )
    }
}



// ****************************
// Void Return type
// ****************************
// this function doesn't return anything
function addNewPizza(pizzaObj:Pizza) {
    menu.push(pizzaObj);
}
