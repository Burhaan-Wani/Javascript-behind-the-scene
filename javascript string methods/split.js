"use strict";
// split method
const split = function (str, symbol = undefined) {
    const arr = [];
    let newStr = "";
    let inc = 0;
    for (let i = 0; i < str.length; i++) {
        if (i && str[i] === symbol && str[i + 1] === undefined) {
            arr[inc] = newStr;
            return arr;
        }
        if (str[i + 1] === undefined) {
            newStr += str[i];
            arr[inc] = newStr;
            newStr = "";
        } else if (str[i] === symbol) {
            arr[inc] = newStr;
            inc += 1;
            newStr = "";
        } else if (symbol === undefined) {
            arr[inc] = str;
            break;
        } else if (symbol === "") {
            arr[inc] = str[i];
            inc += 1;
        } else {
            newStr += str[i];
        }
    }
    return arr;
};
console.log(split("hello my name is burhaan", " "));
