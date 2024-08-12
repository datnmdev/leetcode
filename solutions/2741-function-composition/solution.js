/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let i = functions.length
    function recusive(x) {
        --i
        if (i == 0) {
            return functions[0](x)
        }
        return recusive(functions[i](x))
    }
    return function(x) {
        if (i == 0) {
            return x
        }
        return recusive(x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
