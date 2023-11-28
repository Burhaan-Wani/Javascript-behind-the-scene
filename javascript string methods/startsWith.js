"use strict";
// Program to check whether a string stats with a given letter or word
const startsWith = function (originalStr, containsStr) {
    let len = 0;
    const num = containsStr.length;
    for (let i = 0; i <= originalStr.length; i++) {
        if (originalStr[i] === containsStr[i]) {
            len += 1;
        } else {
            return false;
        }
        if (num === len) {
            return true;
        }
    }
    return originalStr === containsStr ? true : false;
};

const arr = ["hello", "h"];
console.log(startsWith(...arr));
