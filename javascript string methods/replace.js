"use strict";
// replace method
const replace = function (str, ContainsStr, replaceWithStr) {
    // new String for loop first
    let newStr = "";
    // another new string for loop second
    let anotherNewStr = "";
    // incrementing variable for each match
    let increment = 0;
    for (let i = 0; i < str.length; i++) {
        let match = true;
        for (let j = 0; j < ContainsStr.length; j++) {
            if (str[i + j] !== ContainsStr[j]) {
                newStr += str[i + j];
                match = false;
                break;
            } else {
                increment += 1;
            }
        }
        if (match) {
            for (let k = newStr.length + increment; k < str.length; k++) {
                anotherNewStr += str[k];
            }
            return `${newStr}${replaceWithStr}${anotherNewStr}`;
        }
    }
    return str;
};
const _strings = [
    "hello world class",
    "world",
    "burhaan! welcome to javascript mastery",
];
console.log(replace(..._strings));
