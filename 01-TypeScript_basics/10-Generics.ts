//Generics 
// - Allow us to add flexibility to existing functions, types etc..
// - you can think of them like a function parameters, but for types
// - we use angle bracket syntax (<>) 


const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", 
                        "whiskers on kittens",
                        "bright copper kettles",
                        "warm woolean mittens"]
const voters = [
    {name: "Alice", age: 42}, 
    {name: "Bob", age: 77}
]
    
// function getLastItem(array){
//     return array[array.length -1 ]
// }

// in the the above we can't explicity say the type of array 
// This is when  


// function getLastItem<PlaceHolderType>(array: PlaceHolderType[]){
//     return array[array.length - 1 ]
// }

// we can use anything in place of PlaceHolderType
// a general convention that people use is "Type" or just "T"

// console.log(getLastItem(gameScores))
// console.log(getLastItem(favoriteThings))
// console.log(getLastItem(voters))

// now we hover over the getLastItem()
// then the intelliesence will 
// console.log(getLastItem(gameScores)):-  function getLastItem<number>(array: number[]): number
// console.log(getLastItem(favoriteThings)) function getLastItem<string>(array: string[]): string
// console.log(getLastItem(voters))

// explicitly type for the return value from function. 


function getLastItem<Type>(array: Type[]): Type | undefined{
    return array[array.length - 1 ]
}

console.log(getLastItem(gameScores))


// another concept: Explicitly type generic function calls 

// console.log(getLastItem<we-cant-define-it-here>(gameScores))
