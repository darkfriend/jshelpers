/**
 * Check variable on empty
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @return {boolean}
 */
export function empty(variable) {
	return ( variable === undefined || variable === "" || variable === 0   || variable === "0" || variable === null  || variable === false  || ( typeof variable === 'object' && Object.values(variable).length === 0) );
}