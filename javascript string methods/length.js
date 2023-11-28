"use strict";
// Program to find the length
function len(str) {
    let num = 0;
    for (let i in str) {
        num += 1;
    }
    return num;
}
const string = "Hello World";
console.log(len(string));
