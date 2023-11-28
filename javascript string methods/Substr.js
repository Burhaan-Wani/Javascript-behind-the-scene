"use strict";
// Substr method
const substr = function (str, start, end) {
    let newStr = "";
    start =
        start === 0 || (start < 0 && str[start + str.length] === undefined)
            ? 0
            : start && start > 0 && start < str.length
            ? start
            : start && start < 0
            ? start + str.length
            : start;
    end =
        end === 0
            ? 0
            : end && end > 0 && end && start + end < str.length
            ? end + start
            : end && end < 0
            ? end
            : str.length;
    for (let i = start; i < end; i++) {
        newStr += str[i];
    }
    let string =
        start > str.length
            ? ""
            : start && start > 0 && start < str.length && end && end < 0
            ? ""
            : newStr;
    return string;
};
console.log(substr("Apple, Banana, Kiwi", 0));
