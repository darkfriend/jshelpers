# My javascript library

* es6
    * ``` in_array(needle, haystack, argStrict); ``` // boolean 
    * ` throw new ResultError('error message');`  // exception. **ResultErrorES6.js**
    * ` scrollToBlock(selector); ` // search block and scroll
    * ` serialize(array); ` // string
    * ` unserialize(string); ` // array
    * ` sleep(ms); ` // delay
    * ` startFunc(name); ` // start function from string
* es5
    * ` throw new ResultError('error message');`  // exception
* jquery
    * ``` $(selector).alignSize(params, modify); ``` // if no flexbox. align size DOM-elements
    * `` $(form).serializeObject(); `` // object
    
## How use es5?

1. Remove word ```export ```
1. Use webpack or gulp or babel or etc.

## How use?

``import {#method_name1#,#method_name2#} from '#path_to_file#' ``