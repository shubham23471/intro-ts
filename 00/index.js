var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var orderQueue = [];
var nextOrderId = 0;
function addNewPizza(pizzaObj) {
    // const newPizzaObj = {...pizzaObj, id : nextPizzaId++}
    // or a better way to do this
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++,
        pizza: selectedPizza,
        status: "ordered"
    };
    orderQueue.push(newOrder);
    console.log("Pushed new order");
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " order id not found in the orderQueue"));
        return;
    }
    order.status = "completed";
    return order;
}
function getPizzaDetail(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter identifier must be string or number");
    }
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12})
// addNewPizza({id: nextPizzaId++, name: "BBQ Chicken", price: 12 })
// addNewPizza({id: nextPizzaId++, name: "Spicy Sausage", price: 11})
// placeOrder("Chicken Bacon Ranch")
// completeOrder(1)
console.log("Menu:", menu);
console.log("Cash In Register:", cashInRegister);
console.log("Order queque:", orderQueue);
console.log("get pizza fun", getPizzaDetail);
// when you try to run this code you will face error: TypeError 
// next: we will learn about the typescript basics
