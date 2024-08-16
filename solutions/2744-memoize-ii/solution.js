/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map()
    const idsMap = new Map()
    let id = 0

    function getObjectId(obj) {
        if (!idsMap.has(obj)) {
            idsMap.set(obj, ++id)
        }
        return idsMap.get(obj)
    }

    function keyGenerator(...args) {
        return args.map(arg => getObjectId(arg)).join('-')
    }

    return function (...args) {
        const key = keyGenerator(...args)
        if (!cache.has(key)) {
            const val = fn(...args)
            cache.set(key, val)
            return val
        }
        return cache.get(key)
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
