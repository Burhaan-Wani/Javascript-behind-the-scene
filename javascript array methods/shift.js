"use strict";
// array shift method
const shift = function (arr) {
    if (arr[0] === undefined) {
        return undefined;
    }
    let number = 1;
    let newArray = [];
    let inc = 0;
    for (let i = number; i < arr.length; i++) {
        newArray[inc] = arr[i];
        inc += 1;
    }
    array = newArray;
    return arr[0];
};

let array = [1, 2, 3, 4, 5];
const q = shift(array); // returns the element that was removed
console.log(q);
console.log(array);
