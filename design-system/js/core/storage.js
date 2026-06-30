/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/storage.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
STORAGE

Persistent storage layer.

Features

• LocalStorage wrapper
• JSON serialization
• Safe parsing
• Namespaced keys
• Backup ready
• Future IndexedDB compatible

======================================================================*/

"use strict";

const Storage={

namespace:"myjourney",

version:"1.0",

/*======================================================================
INIT
======================================================================*/

init(){

return true;

},

/*======================================================================
KEY
======================================================================*/

key(name){

return `${this.namespace}.${this.version}.${name}`;

},

/*======================================================================
GET
======================================================================*/

get(name,fallback=null){

try{

const value=

localStorage.getItem(

this.key(name)

);

if(value===null){

return fallback;

}

return JSON.parse(value);

}

catch(error){

console.warn(

"Storage GET error",

error

);

return fallback;

}

},

/*======================================================================
SET
======================================================================*/

set(name,value){

try{

localStorage.setItem(

this.key(name),

JSON.stringify(value)

);

document.dispatchEvent(

new CustomEvent(

"storage:update",

{

detail:{name,value}

}

)

);

return true;

}

catch(error){

console.error(

"Storage SET error",

error

);

return false;

}

},

/*======================================================================
REMOVE
======================================================================*/

remove(name){

localStorage.removeItem(

this.key(name)

);

},

/*======================================================================
CLEAR
======================================================================*/

clear(){

Object.keys(localStorage)

.forEach(key=>{

if(

key.startsWith(

`${this.namespace}.`

)

){

localStorage.removeItem(key);

}

});

},

/*======================================================================
HAS
======================================================================*/

has(name){

return(

localStorage.getItem(

this.key(name)

)!==null

);

},

/*======================================================================
TOGGLE
======================================================================*/

toggle(name){

const value=

!!this.get(name,false);

this.set(

name,

!value

);

return !value;

},

/*======================================================================
PUSH
======================================================================*/

push(name,item){

const data=

this.get(name,[]);

data.push(item);

this.set(name,data);

return data;

},

/*======================================================================
UPDATE
======================================================================*/

update(name,id,newData){

const data=

this.get(name,[]);

const index=

data.findIndex(

item=>item.id===id

);

if(index<0){

return false;

}

data[index]={

...data[index],

...newData

};

this.set(name,data);

return true;

},

/*======================================================================
DELETE
======================================================================*/

delete(name,id){

const data=

this.get(name,[])

.filter(

item=>item.id!==id

);

this.set(name,data);

return data;

},

/*======================================================================
EXPORT
======================================================================*/

export(){

const backup={};

Object.keys(localStorage)

.forEach(key=>{

if(

key.startsWith(

`${this.namespace}.`

)

){

backup[key]=

localStorage.getItem(key);

}

});

return backup;

},

/*======================================================================
IMPORT
======================================================================*/

import(data={}){

Object.entries(data)

.forEach(([key,value])=>{

localStorage.setItem(

key,

value

);

});

},

/*======================================================================
SIZE
======================================================================*/

size(){

let bytes=0;

Object.keys(localStorage)

.forEach(key=>{

if(

key.startsWith(

`${this.namespace}.`

)

){

bytes+=

localStorage.getItem(key)

.length;

}

});

return bytes;

}

};

/*======================================================================
END OF FILE
======================================================================*/
