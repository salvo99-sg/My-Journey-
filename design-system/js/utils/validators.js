/*======================================================================
PRODUCT.......: My Journey
MODULE........: Validators
FILE..........: js/utils/validators.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
VALIDATORS

======================================================================*/

"use strict";

const Validators={

required(value){

return value!==null &&

value!==undefined &&

String(value).trim()!=="";

},

email(value){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/

.test(value);

},

url(value){

try{

new URL(value);

return true;

}

catch{

return false;

}

},

number(value){

return !isNaN(value);

},

positive(value){

return Number(value)>=0;

},

date(value){

return !isNaN(

Date.parse(value)

);

},

maxLength(value,max){

return

String(value).length<=max;

},

minLength(value,min){

return

String(value).length>=min;

}

};

/*======================================================================
END OF FILE
======================================================================*/
