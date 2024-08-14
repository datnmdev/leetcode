/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return await new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)
            fn(...args)
                .then(res => {
                    clearTimeout(timeoutId)
                    resolve(res)
                })
                .catch(err => {
                    clearTimeout(timeoutId)
                    reject(err)
                })
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
