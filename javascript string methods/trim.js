"use strict";
// trim method
const trim = function (str) {
    let newStr = "";
    let left = 0;
    let right = str.length - 1;
    while (str[left] === " ") {
        left += 1;
    }
    while (str[right] === " ") {
        right -= 1;
    }
    for (let i = left; i <= right; i++) {
        newStr += str[i];
    }
    return newStr;
};
console.log(trim("     hello     world             "));
