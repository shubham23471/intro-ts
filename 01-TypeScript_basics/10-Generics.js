//Generics 
// - Allow us to add flexibility to existing functions, types etc..
// - you can think of them like a function parameters, but for types
// - we use angle bracket syntax (<>) 
var gameScores = [14, 21, 33, 42, 59];
var favoriteThings = ["raindrops on roses",
    "whiskers on kittens",
    "bright copper kettles",
    "warm woolean mittens"];
var voters = [
    { name: "Alice", age: 42 },
    { name: "Bob", age: 77 }
];
// function getLastItem(array){
//     return array[array.length -1 ]
// }
// in the the above we can't explicity say the type of array 
// This is when  
function getLastItem(array) {
    return array[array.length - 1];
}
// we can use anything in place of PlaceHolderType
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
