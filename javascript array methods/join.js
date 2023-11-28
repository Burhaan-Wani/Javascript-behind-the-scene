"use strict";
// arrays join method
const join = function (arr, symbol = ",") {
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
            newStr += arr[i] += symbol;
        } else {
            newStr += arr[i];
        }
    }
    return newStr;
};
console.log(join(["hello", "world", "games"], "+"));
