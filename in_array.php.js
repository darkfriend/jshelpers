/**
 * @author not i
 * @param {string|number} needle
 * @param {object|array} haystack
 * @param {boolean} argStrict
 * @return {boolean}
 */
export default function in_array (needle, haystack, argStrict=false) {
  //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
  //   returns 1: true
  //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
  //   returns 2: false
  //   example 3: in_array(1, ['1', '2', '3']);
  //   example 3: in_array(1, ['1', '2', '3'], false);
  //   returns 3: true
  //   returns 3: true
  //   example 4: in_array(1, ['1', '2', '3'], true);
  //   returns 4: false

  let key = '',
    strict = !!argStrict;

  // we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
  // in just one for, in order to improve the performance
  // deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true
      }
    }
  }

  return false
}