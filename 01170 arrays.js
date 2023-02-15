'use strict';

console.log("** One dimensional array **");

// create one dimensional array
let days = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Print to terminal the objects inside the array - .length will give the size of the array
for (let i = 0; i < days.length; i++) {
    console.log("Object", i, "is", days[i]);
}


console.log("** Two dimensional array **");

// create 2d array
let animalTable = [
    ['Dog', 'Cat', 'Hamster'],
    ['Giraffe', 'Elephant', 'Rhino']
];

// go through each array and print to terminal
for (let i = 0; i < animalTable.length; i++) {
    for (let n = 0; n < animalTable[i].length; n++) {
        console.log("Object", n, "in sub array", i, "is", animalTable[i][n]);
    }
}


console.log("** Adding to 1d array **");

// create empty array
let fruit = [];
// setting 'Banana' as first value of array, will be added if empty, will be changed if not
fruit[0] = 'Banana';
// setting 'Banana' as second value of array, will be added if empty, will be changed if not
fruit[1] = 'Apple';
// adding 'Orange' to the first empty spot (end of array)
fruit.push('Orange');

// Print to terminal the objects inside the array
for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


console.log("** Adding to 2d array **");

let animals = [];

animals.push(['Tiger', 'Hippo', 'Eagle']);
animals.push(['Polar Bear', 'Black Bear', 'Panda']);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
