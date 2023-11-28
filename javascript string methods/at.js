"use strict";
// at method
const at = function (str, number) {
    number = number < 0 ? number + str.length : number;
    for (let i = 0; i < str.length; i++) {
        if (i === number) {
            return str[i];
        }
    }
};
console.log(at("hello world", 7));
const icons = "☃★♲";

console.log(icons.codePointAt(1));
// Expected output: "9733"
