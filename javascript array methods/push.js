"use strict";
// array push method
const push = function (arr, ...array) {
    let newArray = arr;
    let inc = 0;
    let totalLength = newArray.length + array.length;
    for (let i = newArray.length; i < totalLength; i++) {
        newArray[i] = array[inc];
        inc += 1;
    }
    pushArray = newArray;
    return pushArray.length;
};
let pushArray = [1, 2, 3, 4, 5];
console.log(push(pushArray, 1, 2, 3, 4)); // returns length
console.log(pushArray); // return newArray
