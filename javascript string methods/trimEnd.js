"use strict";
// trimEnd method
const trimEnd = function (str) {
    let newStr = "";
    let right = str.length - 1;
    while (str[right] === " ") {
        right -= 1;
    }
    for (let i = 0; i <= right; i++) {
        newStr += str[i];
    }
    return newStr;
};
console.log(trimEnd("     world     hello"));
