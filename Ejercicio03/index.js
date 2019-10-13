console.log('Clase 3 Variables Números');
var age = 34;

console.log(age);
// incrementar el valor de age +1
age++;
console.log(`Incremeta edad +1 ==> ${age}`);
// incrementar el valor de age +1
age += 1;
console.log(`Incremeta edad +1 ==> ${age}`);

var weight = 68;
// Decremento
weight = weight - 2;
console.log(`Bajé dos kilos 💪 ${weight}`);
// decremento
weight--;

console.log(`Bajé 1 kilo más 💪 ${weight}`);
// si me como un sandwich aumento un kg 😁
var sandwich = 1;
console.log(`Luego de comer un sandwich mi peso será ==>  ${weight + sandwich}`);
console.log(`Ahora mi peso es =>> ${weight}`);
var playSoccer = 1;
// si Juego al futbol bajo 1kg ⚽
console.log(` Luego de un partidito de fútbol ==> ${weight - playSoccer} ⚽`);
// Decimales
var priceWine = 200.3;
console.log(`Precio de Vino por unidad ==> ${priceWine}`);
var quantity = 3;
// Total por 3 unidades
var total = priceWine * quantity;
console.log(`El Precio a pagar por ${quantity} vinos es de ==> ${total}`);
// Javascript no es muy preciso para manejar decimales.
total = (priceWine * 100 * quantity) / 100;
console.log(`1- Pasa El decimal a entero ${priceWine * 100}`);
console.log(`2-Multiplica por la cantidad ${priceWine * 100 * quantity}`);
console.log(`3- y Divide por 100 para llegar al valor decimal${(priceWine * 100 * quantity) / 100}`);
console.log(`3- y Divide por 100 para llegar al valor decimal más preciso ${Math.round(priceWine * 100 * quantity) / 100}`);
console.log(total);
// agrega dos decimales luego de la coma
total = total.toFixed(2);

console.log(` Agrega dos decimales luego de la coma y el resultado es un STRING ==> ${total}`);
var float = parseFloat(total);
var float2 = Number(total);
console.log(`Para transformar en el valor en decimal`);
console.log(float);
console.log(`Otra forma de transformar un valor numérico decimal`);
console.log(float2);
// DIVISION
var persons = 2;
var pizzaSlices = 8;
var pizzaSlicesPerPerson = pizzaSlices / persons;
console.log(` Cantidad de  persona comerá ${pizzaSlicesPerPerson} 🍕`);
