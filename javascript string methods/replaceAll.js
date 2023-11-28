"use strict";
// replaceAll method
const replaceAll = function (input, target, replacement) {
    let result = "";
    let i = 0;

    while (i < input.length) {
        // Check if the current substring matches the target
        let match = true;
        for (let j = 0; j < target.length; j++) {
            if (input[i + j] !== target[j]) {
                match = false;
                break;
            }
        }

        // If a match is found, append the replacement and update the index
        if (match) {
            result += replacement;
            i += target.length;
        } else {
            // If no match, append the current character and move to the next index
            result += input[i];
            i++;
        }
    }

    return result;
};

// Example usage

const __strings = ["hello james! nice to meet you james", "james", "burhaan"];

console.log(replaceAll(...__strings));
