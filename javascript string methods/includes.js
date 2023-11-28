function containsSubstring(mainString, subString) {
    // Loop through the main string
    for (let i = 0; i <= mainString.length - subString.length; i++) {
        let match = true;
        for (let j = 0; j < subString.length; j++) {
            if (mainString[i + j] !== subString[j]) {
                match = false;
                break;
            }
        }
        // If match is still true, substring is found
        if (match) {
            return true;
        }
    }
    // If no match is found
    return false;
}

// Example usage:
let mainString = "Hello world";
let subString = "world";

console.log(containsSubstring(mainString, subString));
