/*======================================================================
PRODUCT.......: My Journey
MODULE........: Hotels
FILE..........: js/modules/hotels.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Hotels={

items:[],

init(){

this.items=

Storage.get(

"hotels",

[]

);

},

add(hotel){

hotel.id=crypto.randomUUID();

this.items.push(hotel);

this.save();

},

remove(id){

this.items=

this.items.filter(

hotel=>hotel.id!==id

);

this.save();

},

get(id){

return this.items.find(

hotel=>hotel.id===id

);

},

all(){

return this.items;

},

save(){

Storage.set(

"hotels",

this.items

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
