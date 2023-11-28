"use Strict";
// Program to find character at a particular index

function CharAt(str, index) {
    for (let i = 0; i < str; i++) {
        if (i === index) {
            break;
        } else {
            return "undefined";
        }
    }
    return str[index];
}
console.log(CharAt("hello world", 3));
