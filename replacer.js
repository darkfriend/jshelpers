/**
 * Заменяет все вхождения из объекта.
 * @example 'Я шел {year} лет {point}'.replacer({'{year}':10,'{point}':'домой'});
 * @param {object} replaceObject
 * @returns {string}
 */
String.prototype.replacer = function(replaceObject) {
    let replaceString = this;
    let regex;
    for(let key in replaceObject) {
        regex = new RegExp(key, "g");
        replaceString = replaceString.replace(regex, replaceObject[key]);
    }
    return replaceString;
};