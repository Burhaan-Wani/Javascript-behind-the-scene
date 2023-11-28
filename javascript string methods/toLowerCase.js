"use strict";
// Program to convert a string to lower case
const upperCaseArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
];
const lowerCaseArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
];
let newStr = "";
function toLower(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < upperCaseArray.length; j++) {
            if (str[i] == upperCaseArray[j] || str[i] == lowerCaseArray[j]) {
                newStr += lowerCaseArray[j];
            }
        }
    }
    return newStr;
}
const str = "HEllO WorLD";
console.log(toLower(str));
