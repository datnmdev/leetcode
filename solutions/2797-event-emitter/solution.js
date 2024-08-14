class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (this[eventName] === undefined) {
            this[eventName] = {
                keysMap: new Map(),
                callbacks: []
            }
        }
        this[eventName].keysMap.set(callback, this[eventName].callbacks.length)
        this[eventName].callbacks.push(callback)
        const _this = this
        return {
            unsubscribe: () => {
                _this[eventName].callbacks[_this[eventName].keysMap.get(callback)] = undefined
                _this[eventName].keysMap.delete(callback)
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (this[eventName] === undefined || this[eventName].callbacks.length == 0) {
            return []
        }
        const result = []
        for (let cb of this[eventName].callbacks) {
            if (cb) {
                result.push(cb(...args))
            }
        }
        return result
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
