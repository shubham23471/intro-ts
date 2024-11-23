// Omit Types
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: 'john_doe', role: "member" },
    { id: nextUserId++, username: 'jane_smith', role: "contributor" },
    { id: nextUserId++, username: 'alice_jones', role: "admin" },
    { id: nextUserId++, username: 'charlie_brown', role: "member" }
];
function updateUser(id, updates) {
    var foundUser = users.find(function (user) { return user.id === id; });
    if (!foundUser) {
        console.error("User not found");
        return;
    }
    // this will change the Object in place
    Object.assign(foundUser, updates);
}
// updateUser(1, {username: "new_john_doe"})
// updateUser(4, {role:"contributor"})
// function addNewuser(newUser: any): User{
//     newUser.id = nextUserId++
//     users.push(newUser)
//     return newUser
// }
// after checking the solution 
// it was mentioned in the challenge to use spread operator
// function addNewuser(newUser: any): User{
//     const user : User = {
//         id: nextUserId ++,
//         ...newUser
//     }
//     users.push(user)
//     return user
// }
// addNewuser({username:"joe_schmoe", role: "member"})
// console.log(users)
// now addressing the issues with newUser: any 
// is that we can't pass in now we have disabled the
// type checking. 
// if we change it User we have to Partial type that give use an 
// type error because we want the return value to be User. 
// To solve this issue. We are going to use the Omit type 
// Omit Type: 
//  Omit takes in a type AND a string (or union of strings)
// property name(s), and returns a new type with those 
// propeties removed
function addNewuser(newUser) {
    var user = __assign({ id: nextUserId++ }, newUser);
    users.push(user);
    return user;
}
addNewuser({ username: "joe_schmoe", role: "member" });
console.log(users);
