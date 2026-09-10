function pizzaOven(crust, sauce, cheese, toppings) {
  var pizza = {};
  pizza.crustType = crust;
  pizza.sauceType = sauce;
  pizza.cheeseType = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])


var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"],
);

var p3 = pizzaOven("thin crust", "pesto", "goat cheese", [
  "spinach",
  "sun-dried tomatoes",
]);

var p4 = pizzaOven("stuffed crust", "alfredo", "cheddar", "pineapple");

console.log("My First Pizza is: ", p1);
console.log("My Second Pizza is: ", p2);
console.log("My Third Pizza is: ", p3);
console.log("My Fourth Pizza is: ", p4);
