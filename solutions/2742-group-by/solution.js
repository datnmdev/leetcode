/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const obj = {}
    for (let e of this) {
        const key = fn(e)
        if (obj[key] === undefined) {
            obj[key] = [e]
        } else {
            obj[key].push(e)
        }
    }
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
