/*======================================================================
PRODUCT.......: My Journey
MODULE........: Packing List
FILE..........: js/modules/packing.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
PACKING LIST

Responsibilities

• Categories
• Check items
• Progress
• CRUD
• Persistent storage

======================================================================*/

"use strict";

const Packing={

items:[],

init(){

this.items=

Storage.get(

"packing",

[]

);

},

all(){

return this.items;

},

add(data){

const item={

id:crypto.randomUUID(),

checked:false,

createdAt:Date.now(),

...data

};

this.items.push(item);

this.save();

return item;

},

toggle(id){

const item=

this.items.find(

item=>item.id===id

);

if(!item) return;

item.checked=!item.checked;

this.save();

},

update(id,data){

const item=

this.items.find(

item=>item.id===id

);

if(!item) return;

Object.assign(item,data);

this.save();

},

remove(id){

this.items=

this.items.filter(

item=>item.id!==id

);

this.save();

},

clearCompleted(){

this.items=

this.items.filter(

item=>!item.checked

);

this.save();

},

progress(){

if(!this.items.length) return 0;

const completed=

this.items.filter(

item=>item.checked

).length;

return Math.round(

completed/

this.items.length

*100

);

},

save(){

Storage.set(

"packing",

this.items

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
