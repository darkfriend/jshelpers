# Javascript helpers

* es6
    * ` in_array(needle, haystack, argStrict); // boolean `
    * ` throw new ResultError('error message'); // exception`
    * ` scrollToBlock(selector); // search block and scroll`
    * ` serialize(array); // string`
    * ` unserialize(string); // array`
    * ` sleep(ms); // delay`
    * ` startFunc(name); // start function from string`
    * ` array_count(arr); // integer`
    * ` rand(min=0,max=99999); // integer`
    * ` 'you string'.replacer(replaceObject); // string`
    * ` number_format(number, decimals=2, dec_point=".", thousands_sep=" "); // number `
    * ` empty(variable); // boolean `
* es5
    * ` throw new ResultError('error message');`  // exception
* jquery
    * ``` $(selector).alignSize(params, modify); ``` // if no flexbox. align size DOM-elements
    * `` $(form).serializeObject(); `` // object
    
## How use es5 from es6?

1. Remove word ```export and let/const```
1. Use webpack or gulp or babel or etc.

## How use?

``import {#method_name1#,#method_name2#} from '#path_to_file#' ``

## Check empty (javascript)

```javascript
import empty from "./empty.js";
let variable;
empty(variable); // true

// check empty Object
variable = {};
empty(variable); // true
empty(variable.param); // true (no throw exception)
empty(variable['param']); // true (no throw exception)
empty(variable.param.subParam); // throw exception!

variable = {a:0};
empty(variable.a); // true

// check empty Array
variable = [];
empty(variable); // true
empty(variable[1]); // true

variable = [0];
empty(variable); // false
empty(variable[0]); // true

// check empty String
variable = '';
empty(variable); // true

variable = '0';
empty(variable); // true

// check empty Number
variable = 0;
empty(variable); // true
```