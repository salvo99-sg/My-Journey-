/*======================================================================
PRODUCT.......: My Journey
MODULE........: Memories
FILE..........: js/modules/memories.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Memories={

list:[],

init(){

this.list=

Storage.get(

"memories",

[]

);

},

create(memory){

memory.id=crypto.randomUUID();

memory.createdAt=Date.now();

this.list.unshift(memory);

this.save();

},

update(id,data){

const memory=

this.list.find(

item=>item.id===id

);

if(!memory) return;

Object.assign(memory,data);

this.save();

},

remove(id){

this.list=

this.list.filter(

item=>item.id!==id

);

this.save();

},

all(){

return this.list;

},

save(){

Storage.set(

"memories",

this.list

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
