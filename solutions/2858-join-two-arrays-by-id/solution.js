/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const tmpArr = arr1.concat(arr2).reduce((acc, curr) => {
        if (acc[`${curr.id}`] !== undefined) {
            acc[`${curr.id}`] = {
                ...acc[`${curr.id}`],
                ...curr
            }
        } else {
            acc[`${curr.id}`] = curr
        }
        return acc
    }, {})
    const joinedArr = []
    for (let key in tmpArr) {
        joinedArr.push(tmpArr[key])
    }
    return joinedArr.sort((a, b) => a.id - b.id)
};
