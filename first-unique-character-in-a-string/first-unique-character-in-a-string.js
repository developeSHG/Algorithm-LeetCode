/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (const i in s) {
        const letter = s[i];
        if (s.indexOf(letter) === s.lastIndexOf(letter)) return i;
    }
    return -1;
};