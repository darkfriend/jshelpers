/**
 * Sleep in js
 * @param {number} ms milliseconds
 * @example sleep(1000) - delay in 1 second
 */
export function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}