'use strict';

console.log("** One dimensional array **");

let days = ['Monday', 'Tuesday', 'Wedensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Print to terminal the objects inside the array - .length will give the size of the array
for (let i = 0; i < days.length; i++) {
    console.log("Object", i, "is", days[i]);
}


console.log("** Two dimensional array **");

let animalTable = [
    ['Dog', 'Cat', 'Hamster'],
    ['Giraffe', 'Elephant', 'Rhino']
];

//console.log(animalTable[0][0]);
//animalTable[1][3] = 'Lion';
//console.log(animalTable[1]);

for (let i = 0; i < animalTable.length; i++) {
    for (let n = 0; n < animalTable[i].length; n++) {
        console.log("Object", n, "in sub array", i, "is", animalTable[i][n]);
    }
}
