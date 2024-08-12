/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkArr = []
    const chunkCount = arr.length / size
    for (let i = 0; i < chunkCount; ++i) {
        chunkArr.push(arr.slice(i * size, (i + 1) * size))
    }
    return chunkArr
};

