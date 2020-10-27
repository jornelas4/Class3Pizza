function costSplit()
{

//input how many plain cheese pizza's

var pizzaQuantity = prompt(" How many plain cheese pizza's ordered? ");

//converting from string to number

pizzaQuantity = parseFloat(pizzaQuantity);

//input how many extra toppings

var toppingQuantity = prompt("How many extra toppings added? ");

//converting from string to number

toppingQuantity = parseFloat(toppingQuantity);

//how many people splitting the cost

var totalPeople = prompt("How many people are splitting the cost? ");

totalPeople = parseInt(totalPeople);

var calculation = ((pizzaQuantity * 15) + ( toppingQuantity *1.25)) /totalPeople;

alert (` Your total per person is: $${calculation.toFixed(2)}` );
}