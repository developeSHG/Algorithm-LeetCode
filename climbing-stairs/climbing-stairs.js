/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = new Map();

    const Climbing = (n) => {
        if ([1, 2].includes(n)) return n;

        let n1 = parseInt(n - 1),
            n2 = parseInt(n - 2);
        if (!dp.has(n1)) dp.set(n1, Climbing(n1));
        if (!dp.has(n2)) dp.set(n2, Climbing(n2));

        return dp.get(n1) + dp.get(n2);
    };

    return Climbing(n);
};