/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (typeof obj != 'object') {
        if (obj) {
            return obj
        } else {
            return undefined
        }
    } else if (obj === null) {
        return undefined
    }

    let _obj
    if (obj instanceof Array) {
        _obj = []
    } else {
        _obj = {}
    }

    for (let key in obj) {
        const tmp = compactObject(obj[key])
        if (tmp !== undefined) {
            if (_obj instanceof Array) {
                _obj.push(tmp)
            } else {
                _obj[key] = tmp
            }
        }
    }

    return _obj
};
