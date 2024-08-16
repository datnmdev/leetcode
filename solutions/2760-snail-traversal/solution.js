/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return []
    }
    const result = []
    let reverse = false
    let row = 0
    for (let i = 0; i < this.length; ++i) {
        if (!result?.[row]) {
            result.push([])
        }
        result[row].push(this[i])
        if (!reverse) {
            ++row
            if (row == rowsCount) {
                row = rowsCount - 1
                reverse = true
            }
        } else {
            --row
            if (row == -1) {
                row = 0
                reverse = false
            }
        }
    }
    return result
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
