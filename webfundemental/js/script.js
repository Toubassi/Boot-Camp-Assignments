function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {
        crustType: crust,
        sauceType: sauce,
        cheeseType: cheese,
        toppings: toppings
    };
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("thin crust", "pesto", "goat cheese", ["spinach", "sun-dried tomatoes"]);
var p4 = pizzaOven("stuffed crust", "alfredo", "cheddar", "pineapple");

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
