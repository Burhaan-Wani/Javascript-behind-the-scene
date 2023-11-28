"use strict";
// Program to convert a string to lower case
const capitalLettersArray = [
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
const smallCaseLettersArray = [
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
let newString = "";
function toUpper(string) {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < smallCaseLettersArray.length; j++) {
            if (
                string[i] == smallCaseLettersArray[j] ||
                string[i] == capitalLettersArray[j]
            ) {
                newString += capitalLettersArray[j];
            }
        }
    }
    return newString;
}
const _string = "HElLo wORlD";
console.log(toUpper(_string));
