"use strict";
// Program similar to string method with only difference that if start and end values are less than 0, it is treated as 0
const substring = function (str, [start, end = str.length]) {
    if (start < 0 && end < 0) {
        return "";
    } else if (start < 0 && end > 0) {
        start = 0;
    } else if (start > 0 && end < 0) {
        end = start;
        start = 0;
    }
    let newStr = "";
    for (let i = start; i < end; i++) {
        newStr += str[i];
    }
    return start < 0 ? str : newStr;
};
console.log(substring("hello", [2]));
