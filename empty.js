/**
 * Check variable on empty
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @return {boolean}
 */
export default function empty(variable) {
	return ( variable === undefined || variable === "" || variable === 0   || variable === "0" || variable === null  || variable === false  ||  ( Array.isArray(variable) && variable.length === 0 ) || ( typeof variable === 'object' && Object.values(variable).length === 0) );
}