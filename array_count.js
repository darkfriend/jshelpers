/**
 * Get count elements in array or object
 * @param {object|array} arr
 * @returns {number}
 */
function array_count(arr) {
    let count = 0;
    for(let item in arr) {
        count++;
    }
    return count;
}