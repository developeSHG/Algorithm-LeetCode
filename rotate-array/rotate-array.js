/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) => {
    if (nums.length < k) k %= nums.length;
    const spliceArray = nums.splice(0, nums.length-k)
    spliceArray.forEach(el => nums.push(el))
};