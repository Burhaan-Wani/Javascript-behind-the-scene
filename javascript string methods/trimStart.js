"use strict";
// trimStart method
const trimStart = function (str) {
    let newStr = "";
    let left = 0;
    while (str[left] === " ") {
        left += 1;
    }
    for (let i = left; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
};
console.log(trimStart("     world     hello  "));
