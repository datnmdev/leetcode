/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    function _flat(arr, i) {
        if (i == n) {
            return arr
        }
        let j = 0
        while (j < arr.length) {
            if (arr[j] instanceof Array) {
                const l = arr[j].length
                arr.splice(j, 1, ...arr[j])
                j += l
            } else {
                ++j
            }
        }
        return _flat(arr, i + 1)
    }

    return _flat(arr, 0)
};
