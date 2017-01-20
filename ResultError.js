/**
 * darkfriend on 20.01.2017.
 */

/**
 * Error exception
 * @param message
 * @constructor
 * @use throw new ResultError('error message');
 */
function ResultError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}
ResultError.prototype = Object.create(Error.prototype);
ResultError.prototype.name = "ResultError";