'use strict';

/*
1   2   3   4 ...   10
2   4   6   8 ...   20
....
10  20  30  40 ...  100
*/

// creating first array - outer array
let table = [];
// creating 10 arrays inside the first - add the numbers 1-10 while multiplying with 1-10 to get all the numbers in the multiplication table
for (let i = 0; i < 10; i++) {
    let row = [];

    for (let n = 0; n < 10; n++) {
        row.push((i + 1) * (n + 1));
    }

    table.push(row);
}
// print array in a manner appropriate to the multiplication table
for (let i = 0; i < table.length; i++) {
    let row = table[i];

    for (let n = 0; n < row.length; n++) {
        let value = row[n];
        process.stdout.write(value.toString());
        process.stdout.write('\t');
    }

    console.log();
}
