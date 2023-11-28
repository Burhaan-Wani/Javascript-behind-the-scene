"use strict";
// Program to check if a string end with a given string or alphabet
const endsWith = function (originalStr, containsStr) {
    let len = 0;
    let num = containsStr.length;
    for (let i = originalStr.length - 1; i >= 0; i--) {
        if (originalStr[i] === containsStr[num - 1]) {
            num -= 1;
        } else {
            return false;
        }
        if (len === num) {
            return true;
        }
    }
    return originalStr === containsStr ? true : false;
};

let newArr = ["hello", "hello"];
console.log(endsWith(...newArr));
