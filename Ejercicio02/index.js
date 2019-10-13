console.log('Clase 2 Variables Strings');

var firstName = 'Emiliano';

var lastName = 'Durán';
// convertir cadena a mayúsculas
var nameUppercase = firstName.toUpperCase();
// convertir cadena a minúsculas
var lastNameLowercase = lastName.toLowerCase();
// transformar en mayúscula la primera letra del appellido
var firstLeterUppercase = lastNameLowercase.charAt(0).toUpperCase();
console.log(`Primera letra del apellido en Mayúsculas:${firstLeterUppercase}`);
// cantidad de caracteres
var lengthString = firstName.length;
console.log(`Cantidad de caracteres del Nombre: ${lengthString}`);
// concatenar strings
console.log('Hola ' + nameUppercase + ' ' + firstLeterUppercase);
// interpolación de strings
console.log(` concatenación de strings ES6:${firstName} ${lastName}`);
// el método substr()
console.log(firstName.substr(0, 3)); // el primer parámetro es DESDE y el segundo HASTA ==> índices
// desafío: encuentra la última letra de tu nombre=>💪
console.log(firstName.charAt(firstName.length - 1));
console.log(firstName.substr(-1, 1)); // el primer parámetro en negativo inicia desde el final
