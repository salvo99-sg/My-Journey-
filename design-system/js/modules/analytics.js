/*======================================================================
PRODUCT.......: My Journey
MODULE........: Analytics
FILE..........: js/modules/analytics.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
ANALYTICS

Privacy-first local analytics.

======================================================================*/

"use strict";

const Analytics={

events:[],

init(){

this.events=

Storage.get(

"analytics",

[]

);

},

track(name,data={}){

this.events.push({

id:crypto.randomUUID(),

event:name,

data,

timestamp:Date.now()

});

if(this.events.length>1000){

this.events.shift();

}

Storage.set(

"analytics",

this.events

);

},

clear(){

this.events=[];

Storage.remove(

"analytics"

);

},

export(){

return [...this.events];

}

};

/*======================================================================
END OF FILE
======================================================================*/
