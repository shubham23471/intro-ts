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

let nextPizzaId =1
const menu: Pizza[] = [
    {id: nextPizzaId++, name: "Margherita", price: 8},
    {id: nextPizzaId++, name: "Pepperoni", price: 10},
    {id: nextPizzaId++, name: "Hawaiian", price: 10},
    {id: nextPizzaId++, name: "Veggie", price: 9},
]

let cashInRegister = 100 ;
const orderQueue: Order[] = []
let nextOrderId = 0

// function addNewPizza(pizzaObj:Pizza) :void  {
//     // const newPizzaObj = {...pizzaObj, id : nextPizzaId++}
//     // or a better way to do this
//     pizzaObj.id = nextPizzaId++
//     menu.push(pizzaObj);
// }

// re-write with omit 
function addNewPizza(pizzaObj:Omit<Pizza, "id">): Pizza  {
    const newPizza:Pizza = {id : nextPizzaId++, 
        ...pizzaObj 
    }
    menu.push(newPizza)
    return newPizza
}


function placeOrder(pizzaName:string):  Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza){
        console.error(`${pizzaName} does not exist in the menu`)
        return 
    }
    cashInRegister += selectedPizza.price

    const newOrder:Order  = {id: nextOrderId++,
                    pizza: selectedPizza, 
                     status: "ordered"
                    }
    
    orderQueue.push(newOrder)
    console.log("Pushed new order")
    return newOrder
}

function completeOrder(orderId:number): Order | undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} order id not found in the orderQueue`)
        return 
    }
    order.status = "completed"
    return order
}

function getPizzaDetail(identifier: string | number): Pizza  | undefined{
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


addNewPizza({name: "Chicken Bacon Ranch", price: 12})


// addNewPizza({id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
// addNewPizza({id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
// addNewPizza({id: nextPizzaId++, name: "Spicy Sausage", price: 11})

// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)

console.log("Menu:", menu)
console.log("Cash In Register:", cashInRegister)
console.log("Order queque:", orderQueue)
console.log("get pizza fun",getPizzaDetail)


// when you try to run this code you will face error: TypeError 


// next: we will learn about the typescript basics