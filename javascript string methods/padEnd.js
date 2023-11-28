"use strict";
// Program to add padding from the start of the string
const padEnd = function (str, num, any = " ") {
    num = num - str.length - 1;
    let newStr = "";
    for (let i = 0; i <= num; i++) {
        newStr += any;
    }
    return `${str}${newStr}`;
};
console.log(padEnd("hello", 12, "="));
