"use strict";
// Program which return a strings between given indentations
const slice = function (str, [start, end]) {
    if (start == 0 && end === 0) {
        return "";
    } else if (start < 0 && str[start + str.length - 1] === undefined) {
        return str;
    } else if (start < 0 && end === 0) {
        return "";
    }
    end =
        end === 0
            ? 0
            : end > str.length - 1
            ? str.length - 1
            : !end
            ? str.length - 1
            : end < 0
            ? end + str.length - 1
            : end - 1;
    let newStr = "";
    for (let i = start < 0 ? start + str.length : start; i <= end; i++) {
        newStr += str[i];
    }
    return newStr;
};
console.log(slice("this is a slice program", [0, 7]));
