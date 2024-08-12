/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const newArr = [...arr]
    for (let i = 0; i < newArr.length; ++i) {
        newArr[i] = fn(arr[i], i)
    }
    return newArr
};
