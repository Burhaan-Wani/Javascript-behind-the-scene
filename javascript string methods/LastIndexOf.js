"use strict";
// lastIndexOf method
const lastIndexOf = function (str, searchStr) {
    let arr = [];
    let inc = 0;
    if (searchStr === "") {
        return str.length;
    } else if (searchStr === undefined) {
        return -1;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        let match = true;
        for (let j = searchStr.length - 1; j >= 0; j--) {
            if (str[i - inc] !== searchStr[j]) {
                arr = [];
                inc = 0;
                match = false;
                break;
            } else {
                arr[inc] = i - inc;
                inc += 1;
            }
        }
        if (match) {
            return arr[arr.length - 1];
        }
    }
    return -1;
};
console.log(lastIndexOf("this is a hello world program", "th"));
