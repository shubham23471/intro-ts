
type Pizza = {
    id : number,
    name : string, 
    price : number
    }

type Order = {
    id : number, 
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    {id: 1, name: "Margherita", price: 8},
    {id: 2, name: "Pepperoni", price: 10},
    {id: 3, name: "Hawaiian", price: 10},
    {id: 4, name: "Veggie", price: 9},
]


// function getPizzaDetail(identifier: string | number){
//     console.log(`pass identifier is ${identifier}`)
//     let selectedPizza;
//     if (typeof identifier === "string"){
//         selectedPizza = menu.find(pizzaObj => pizzaObj.name.toLowerCase() ==
//                                      identifier.toLowerCase())
//     }
//     else {
//         selectedPizza = menu.find(pizzaObj => pizzaObj.id == identifier)
//     }

//     if (!selectedPizza){
//         console.error(`Pizza with this identifier ${identifier} is not in the menu`)
//         return
        
//     }
//     return selectedPizza
// }

// another way of writting the same function: 
// idea here is to be as explicty as possible while writting the code


function getPizzaDetail(identifier: string | number){
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


console.log(getPizzaDetail)
