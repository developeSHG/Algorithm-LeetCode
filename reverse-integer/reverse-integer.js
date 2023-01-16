/**
 * @param {number} x
 * @return {number}
 */
function t1(x) {
    let result = parseInt(x.toString().split("").reverse().join(""));
    return result < Math.pow(2, 31) - 1 ? result : 0;
}

function t2(x) {
    let result = x.toString().split("");
    result.push("-");
    result.shift();
    result.reverse();
    result = parseInt(result.join(""));
    return result > Math.pow(-2, 31) ? result : 0;
}

var reverse = function (x) {
    if (x === 0) return 0;
    return (x > 0 ? t1 : t2)(x);
};