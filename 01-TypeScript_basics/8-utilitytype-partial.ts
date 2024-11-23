// Utility Types and Partial

type User = {
    id : number,
    username: string, 
    role: "contributor" | "member" | "admin"
}

const users: User[] = [
    {id : 1, username: 'john_doe', role: "member"},
    {id : 2, username: 'jane_smith', role: "contributor"},
    {id : 3, username: 'alice_jones', role: "admin"},
    {id : 4, username: 'charlie_brown', role: "member"}

]

function updateUser(id:number, updates:any){
    let user  = users.find(user => user.id == id)
    console.log(user)
    Object.assign(user, updates)
    // Object.assign(users, user)
    // return user

}

// explainination on why user in users array is getting updated. 
// When you do let user = users.find(user => user.id == id), you're not creating a new copy of the user object. 
// Instead, you're creating a reference to the existing user object in the users array.
// Then, when you do Object.assign(user, updates), you're modifying the original user object in the users array.


// // after checking the solution
// function updateUser2(id:number, updates:any){
//     const  foundUser  = users.find(user => user.id === id)
//     if (!foundUser){
//         console.error("User not found")
//         return
//     }
//     // this will change the Object in place
//     Object.assign(foundUser, updates)
// }



updateUser(1, {username: "new_john_doe"})
updateUser(4, {role:"contributor"})

console.log(users)

// CONCEPTS 
// As you can see here we are passing updates as type any
// As, we don't know before hand what are properties that 
// we are going to update. we can do create a new UpdatedUser
// type but that would result in a lot of duplicate code. 

// type UpdatesUser = {
//     id? : number,
//     username? : string,
//     role? : "contributor" | "member" | "admin"
// }


// Solution for this problem is 
// Utility Types
// build in Utility Types : In Ts there are number of types, like a funciton 
//  they take other ypes in as parameter and return a new type, with some 
// changes made to it. 

// TS also have "Generics" syntax using angle brackets (<>) 

// Now to fix our problem we can use a built-in generic type called as 
// Partial Types 

// what partial Types do?
// this modifies the type you pass in and turns all the properties into
// optional propeties. 

type UpdatesUser = Partial<User>

// now we can add it our function 
function updateUser2(id:number, updates:UpdatesUser){
    const  foundUser  = users.find(user => user.id === id)
    if (!foundUser){
        console.error("User not found")
        return
    }
    // this will change the Object in place
    Object.assign(foundUser, updates)
}

updateUser2(1, {username: "new_john_doe"})
updateUser2(4, {role:"contributor"})

console.log(users)