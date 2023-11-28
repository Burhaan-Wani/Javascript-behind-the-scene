"use strict";
// Program to add padding from the start of the string
const padStart = function (str, num, any = " ") {
    num = num - str.length - 1;
    let newStr = "";
    for (let i = 0; i <= num; i++) {
        newStr += any;
    }
    return `${newStr}${str}`;
};
console.log(padStart("hello", 12, "+"));
