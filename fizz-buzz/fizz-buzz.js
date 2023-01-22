/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let FIZZ = i % 3 == 0;
        let BUZZ = i % 5 == 0;
        answer.push(FIZZ ? (BUZZ ? "FizzBuzz" : "Fizz") : BUZZ ? "Buzz" : i.toString());
    }
    return answer;
}