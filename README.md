# My javascript library

* es6
    * ``` in_array(needle, haystack, argStrict); ``` // boolean 
    * ` throw new ResultError('error message');`  // exception. **ResultErrorES6.js**
    * ` scrollToBlock(selector); ` // search block and scroll
    * ` serialize(array); ` // string
    * ` unserialize(string); ` // array
    * ` sleep(ms); ` // delay
    * ` startFunc(name); ` // start function from string
    * ` array_count(arr); ` // integer
    * ` rand(min=0,max=99999); ` // integer
    * ` 'you string'.replacer(replaceObject); ` // string
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