"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = (value) => {
    let str = value.toString();
    return str.split('').reverse().join('') === str;
};
exports.palindromeBetweenRange = (min, max) => {
    let output = [];
    for (let value = min, arrIndex = 0; value <= max; value++) {
        if (exports.isPalindrome(value)) {
            output[arrIndex] = value;
            arrIndex++;
        }
    }
    return output;
};
//# sourceMappingURL=PalindromeService.js.map