/*======================================================================
PRODUCT.......: My Journey
MODULE........: Utilities
FILE..........: js/utils/utils.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
UTILITY LIBRARY

Responsibilities

• Common helpers
• Formatting
• Debounce
• Throttle
• UUID
• Date helpers
• DOM helpers

======================================================================*/

"use strict";

const Utils={

debounce(callback,delay=250){

let timer;

return(...args)=>{

clearTimeout(timer);

timer=setTimeout(

()=>callback(...args),

delay

);

};

},

throttle(callback,delay=250){

let waiting=false;

return(...args)=>{

if(waiting) return;

callback(...args);

waiting=true;

setTimeout(

()=>waiting=false,

delay

);

};

},

uuid(){

return crypto.randomUUID();

},

formatDate(date,locale="it-IT"){

return new Intl.DateTimeFormat(

locale,

{

dateStyle:"medium"

}

).format(new Date(date));

},

formatTime(date,locale="it-IT"){

return new Intl.DateTimeFormat(

locale,

{

timeStyle:"short"

}

).format(new Date(date));

},

capitalize(text){

if(!text) return "";

return text.charAt(0).toUpperCase()+

text.slice(1);

},

slug(text){

return text

.toLowerCase()

.trim()

.replace(/\s+/g,"-")

.replace(/[^\w-]/g,"");

},

clamp(value,min,max){

return Math.min(

Math.max(value,min),

max

);

},

sleep(ms){

return new Promise(

resolve=>

setTimeout(resolve,ms)

);

},

$(selector,parent=document){

return parent.querySelector(selector);

},

$$(selector,parent=document){

return [...parent.querySelectorAll(selector)];

}

};

/*======================================================================
END OF FILE
======================================================================*/
