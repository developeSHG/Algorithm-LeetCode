/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    return function (n) {
        let left = 0,
            right = n - 1;

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) right = mid - 1;
            else left = mid + 1;
        }

        return left;
    };
};