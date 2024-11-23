// Utility Types and Partial
var users = [
    { id: 1, username: 'john_doe', role: "member" },
    { id: 2, username: 'jane_smith', role: "contributor" },
    { id: 3, username: 'alice_jones', role: "admin" },
    { id: 4, username: 'charlie_brown', role: "member" }
];
function updateUser(id, updates) {
    var user = users.find(function (user) { return user.id == id; });
    console.log(user);
    Object.assign(user, updates);
    // Object.assign(users, user)
    // return user
}
// 
updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });
console.log(users);
