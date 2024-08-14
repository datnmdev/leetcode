var TimeLimitedCache = function() {
    this._count = 0
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existed = this[key] ? true : false
    if (this[`$${key}`] !== undefined) {
        --this._count
        clearTimeout(this[`$${key}`])
        delete this[`$${key}`]
    }
    this[`$${key}`] = setTimeout(() => {
        --this._count
        delete this[key]
        delete this[`$${key}`]
    }, duration)
    ++this._count
    this[key] = value
    return existed
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this[key] !== undefined ? this[key] : -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this._count
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
