"use strict";
// concat method
const concat = function (concatWithStr, ...strings) {
    let newStr = "";
    let [symbol, ...arr] = strings;
    if (arr.length === 0) {
        return (concatWithStr += symbol);
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (newStr === "") {
                newStr += concatWithStr;
                newStr += symbol;
                newStr += arr[i];
            } else {
                newStr += arr[i];
            }
        }
    }
    return newStr;
};
const strings = ["+", "games"];
console.log(concat("hello", ...strings));
