'use strict';

let celsius = process.argv[2];

let fahrenheit = (celsius * (9/5)) + 32;

console.log(celsius, "in Celsius is", fahrenheit, "Fahrenheit");
