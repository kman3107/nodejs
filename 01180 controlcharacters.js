'use strict';

// console.log() automatically adds newline character (\n) to end
console.log("Hello");
console.log("Hello");
// example of same type output
console.log("Hi\nHi");
// to avoid adding newline character we use process.stdout.write() - will only output string or buffer
process.stdout.write("Output one, ");
process.stdout.write("output two.");

console.log();
// another controlcharacter is tab (\t) - amount of spaces depend on the situation
console.log("Hey\tHey");
// will line up the tabbed items, if items aren't too long and/or inconsistent
console.log("Brutus\tCaesar\tAristotle");
console.log("Dave\tRob\tMark");
