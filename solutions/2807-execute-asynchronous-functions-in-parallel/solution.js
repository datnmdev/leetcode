/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let count = 0
        const resolves = functions.map(() => undefined)
        for (let i = 0; i < functions.length; ++i) {
            functions[i]()
                .then(res => {
                    resolves[i] = res
                    ++count
                    if (count == functions.length) {
                        resolve(resolves)
                    }
                })
                .catch(err => reject(err))
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
