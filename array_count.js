/**
 * Get count elements in array or object
 * @param {object|array} arr
 * @returns {number}
 */
export default function array_count(arr) {
    return Object.values(arr).length;
}