/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n
    return function() {
        ++count
        return count - 1
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
