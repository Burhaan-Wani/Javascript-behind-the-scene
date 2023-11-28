"use strict";
// indexOf method
const indexOf = function (str, searchStr) {
    let newArr = [];
    if (!searchStr) {
        return 0;
    }
    for (let i = 0; i <= str.length - searchStr.length; i++) {
        let match = true;
        for (let j = 0; j < searchStr.length; j++) {
            if (str[i + j] !== searchStr[j]) {
                match = false;
                newArr = [];
                break;
            } else {
                newArr[j] = i + j;
            }
        }
        if (match) {
            return newArr[0];
        }
    }
    return -1;
};
console.log(indexOf("hello world", "or"));
