"use strict";
// charCodeAt method
const asciiCodeOfUpperCaseLetters = [
    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
    84, 85, 86, 87, 88, 89, 90,
];
const asciiCodeOfLowerCaseLetters = [
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
    113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 32,
];
const capitalCaseLettersArray = [
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
const smallLettersArray = [
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
const charCodeAt = function (str, index) {
    let asciiCodeChar = str[index];
    if (index >= str.length) return NaN;
    else if (index === "") {
        asciiCodeChar = str[0];
    }
    for (let i = 0; i < smallLettersArray.length; i++) {
        if (asciiCodeChar === smallLettersArray[i]) {
            return asciiCodeOfLowerCaseLetters[i];
        } else {
            continue;
        }
    }
    for (let i = 0; i < capitalCaseLettersArray.length; i++) {
        if (asciiCodeChar === capitalCaseLettersArray[i]) {
            return asciiCodeOfUpperCaseLetters[i];
        } else {
            continue;
        }
    }
};
console.log(charCodeAt("hello world", 7));
