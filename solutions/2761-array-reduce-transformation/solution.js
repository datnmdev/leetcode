/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length == 0) {
        return init
    }
    let accum = init
    for (let num of nums) {
        accum = fn(accum, num)
    }
    return accum
};
