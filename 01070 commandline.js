'use strict';

// Outputs the arguments put into terminal - in this case we print the first 2 arguments, node (the program) and commandline.js (the file)
let term_arg1 = console.log(process.argv[0]);
let term_arg2 = console.log(process.argv[1]);

// Outputs the arguments put into terminal + the greeting - in this case we print the gretting + the 3rd argument IF added in terminal - Ex: node commandline.js John
let greeting = "Hello";
let term_arg3 = process.argv[2];
console.log(greeting, term_arg3);
