/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let answer = [];
    nums.sort((a, b) => a - b).forEach((element, index) => {
        if (target === element)
            answer.push(index);
    });
    return answer;
};