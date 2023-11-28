"use strict";
// array pop method
const pop = function (arr) {
    let newArray = [];
    let inc = 0;
    if (arr[0] === undefined) {
        return undefined;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        newArray[inc] = arr[i];
        inc += 1;
    }
    popArray = newArray;
    return arr[arr.length - 1];
};
let popArray = [1, 2, 3, 4, 5];
const j = pop(popArray); // returns the element that was removed
console.log(j);
console.log(popArray);
