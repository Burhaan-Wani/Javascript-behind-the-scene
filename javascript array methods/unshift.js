"use strict";
// array unshift method
const unshift = function (arr, ...array) {
    let inc = 0;
    let totalLength = arr.length + array.length;
    for (let i = array.length; i < totalLength; i++) {
        array[i] = arr[inc];
        inc += 1;
    }
    unshiftArray = array;
    return unshiftArray.length;
};
let unshiftArray = [1, 2, 3, 4, 5];
console.log(unshift(unshiftArray, 0, -1, -2, -3)); // returns length
console.log(unshiftArray); // returns newArray
