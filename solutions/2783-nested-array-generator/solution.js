/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    const result = []
    function flat(arr) {
        for (let e of arr) {
            if (e instanceof Array) {
                flat(e)
            } else {
                result.push(e)
            }
        }
        return result
    }
    flat(arr)
    for (let e of result) {
        yield e
    }
};

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
