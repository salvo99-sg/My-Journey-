/*======================================================================
PRODUCT.......: My Journey
MODULE........: Transport
FILE..........: js/modules/transport.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Transport={

segments:[],

init(){

this.segments=

Storage.get(

"transport",

[]

);

},

add(segment){

segment.id=crypto.randomUUID();

segment.createdAt=Date.now();

this.segments.push(segment);

this.save();

},

remove(id){

this.segments=

this.segments.filter(

segment=>segment.id!==id

);

this.save();

},

all(){

return this.segments;

},

next(){

return this.segments

.find(

segment=>!segment.completed

);

},

save(){

Storage.set(

"transport",

this.segments

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
