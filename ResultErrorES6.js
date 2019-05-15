/**
 * darkfriend on 20.01.2017.
 */

/**
 * Error exception
 * @param message
 * @constructor
 * @use throw new ResultError('error message');
 */
export class ResultError extends Error {
    static name = "ResultError";
}