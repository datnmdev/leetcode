/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    let timeoutId
    return function(...args) {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId)
            timeoutId = undefined
        }
        timeoutId = setTimeout(() => {
            timeoutId = undefined
            fn(...args)
        }, t)
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
