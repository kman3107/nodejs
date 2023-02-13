// Exercise: Create a program(lol) that approximates Pi
//console.log(Math.PI);
'use strict';

let counter = 0;
let denominator = 1;
let sign = 1;
let sum = 0;

// 300,000,000 loops approximates down to 8 decimals
while(counter < 300000000) {
    let term = sign * 1/denominator;

    sum = sum + term;

    sign *= -1;
    denominator += 2;
    counter++;
}
let pi = sum * 4;
console.log(pi);
