/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    context = context || globalThis
    const fnSymbol = Symbol('fn')
    context[fnSymbol] = this
    const result = context[fnSymbol](...args)
    delete context[fnSymbol]
    return result
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
