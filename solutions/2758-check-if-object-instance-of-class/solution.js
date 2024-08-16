/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) {
        return false
    }

    if (typeof classFunction == 'function') {
        if (classFunction.name.toLowerCase() == 'object') {
            return true
        }
        if (obj instanceof classFunction || (typeof obj) == classFunction.name.toLowerCase()) {
            return true
        }
    }
    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
