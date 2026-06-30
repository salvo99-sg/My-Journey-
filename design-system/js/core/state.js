/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/state.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
APPLICATION STATE

Centralized reactive state manager.

Responsibilities

• Global state
• Publish / Subscribe
• State updates
• Journey selection
• UI state
• Filters
• Playback state

======================================================================*/

"use strict";

const State={

/*======================================================================
STORE
======================================================================*/

store:{

user:null,

journeys:[],

currentJourney:null,

currentDay:null,

language:"it",

theme:"light",

offline:false,

map:{

zoom:13,

center:null,

selectedMarker:null,

playback:false

},

ui:{

modal:null,

drawer:false,

loading:false,

search:false

}

},

listeners:new Map(),

/*======================================================================
INIT
======================================================================*/

init(){

this.restore();

},

/*======================================================================
GET
======================================================================*/

get(path){

return path

.split(".")

.reduce(

(obj,key)=>obj?.[key],

this.store

);

},

/*======================================================================
SET
======================================================================*/

set(path,value){

const keys=

path.split(".");

let target=this.store;

while(keys.length>1){

target=

target[keys.shift()];

}

target[keys[0]]=value;

this.notify(path,value);

this.persist();

},

/*======================================================================
UPDATE
======================================================================*/

update(path,data){

const current=

this.get(path);

this.set(

path,

{

...current,

...data

}

);

},

/*======================================================================
SUBSCRIBE
======================================================================*/

subscribe(path,callback){

if(

!this.listeners.has(path)

){

this.listeners.set(

path,

[]

);

}

this.listeners

.get(path)

.push(callback);

},

/*======================================================================
NOTIFY
======================================================================*/

notify(path,value){

const callbacks=

this.listeners.get(path);

if(!callbacks) return;

callbacks.forEach(

callback=>callback(value)

);

document.dispatchEvent(

new CustomEvent(

"state:change",

{

detail:{

path,

value

}

}

)

);

},

/*======================================================================
RESTORE
======================================================================*/

restore(){

const saved=

Storage.get(

"state",

null

);

if(saved){

this.store={

...this.store,

...saved

};

}

},

/*======================================================================
PERSIST
======================================================================*/

persist(){

Storage.set(

"state",

this.store

);

},

/*======================================================================
RESET
======================================================================*/

reset(){

Storage.remove(

"state"

);

location.reload();

}

};

/*======================================================================
END OF FILE
======================================================================*/
