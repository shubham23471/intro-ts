// we can use Union and Literal type to only allow a certain values 
// userRole in our code
// this is same idea is enum from other langauges. 
// example of enum is a boolean: it can eithe be True or False. 


type UserRole = "guest" | "member" | "admin" 
// this same as saying that type UseRole can take only these 3 
// Literal type values.

type User = {
    username: string, 
    role: "guest" | "member" | "admin"
}

let userRole: UserRole = "admin"

console.log(userRole)