/*======================================================================
PRODUCT.......: My Journey
MODULE........: Gallery
FILE..........: js/modules/gallery.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Gallery={

photos:[],

init(){

this.photos=

Storage.get(

"gallery",

[]

);

},

add(photo){

photo.id=crypto.randomUUID();

this.photos.unshift(photo);

this.save();

},

remove(id){

this.photos=

this.photos.filter(

photo=>photo.id!==id

);

this.save();

},

all(){

return this.photos;

},

save(){

Storage.set(

"gallery",

this.photos

);

},

count(){

return this.photos.length;

}

};

/*======================================================================
END OF FILE
======================================================================*/
