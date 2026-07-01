/*======================================================================
PRODUCT.......: My Journey
MODULE........: Journal
FILE..........: js/modules/journal.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
TRAVEL JOURNAL

Responsibilities

• CRUD
• Storage persistence
• Photo attachments
• GPS coordinates
• Associated weather
• Mood
• Tags
• Sorting
• Search
• Export / future sync ready

======================================================================*/

"use strict";

const Journal={

entries:[],

init(){

this.entries=

Storage.get(

"journal",

[]

);

},

/*======================================================================
CREATE
======================================================================*/

create(data={}){

const entry={

id:crypto.randomUUID(),

createdAt:Date.now(),

updatedAt:Date.now(),

title:"",

text:"",

photos:[],

location:null,

weather:null,

mood:null,

tags:[],

...data

};

this.entries.unshift(entry);

this.save();

document.dispatchEvent(

new CustomEvent(

"journal:create",

{

detail:{id:entry.id}

}

)

);

return entry;

},

/*======================================================================
UPDATE
======================================================================*/

update(id,data){

const entry=

this.get(id);

if(!entry) return false;

Object.assign(

entry,

data,

{updatedAt:Date.now()}

);

this.save();

return true;

},

/*======================================================================
REMOVE
======================================================================*/

remove(id){

this.entries=

this.entries.filter(

entry=>entry.id!==id

);

this.save();

},

/*======================================================================
GET / ALL
======================================================================*/

get(id){

return this.entries.find(

entry=>entry.id===id

);

},

all(){

return this.entries;

},

/*======================================================================
PHOTOS
----------------------------------------------------------------------
Store only photo metadata / references here.
Binary blobs belong to the media (IndexedDB) layer.
======================================================================*/

addPhoto(id,photo){

const entry=

this.get(id);

if(!entry) return false;

entry.photos.push({

id:crypto.randomUUID(),

...photo

});

entry.updatedAt=Date.now();

this.save();

return true;

},

removePhoto(id,photoId){

const entry=

this.get(id);

if(!entry) return false;

entry.photos=

entry.photos.filter(

photo=>photo.id!==photoId

);

entry.updatedAt=Date.now();

this.save();

return true;

},

/*======================================================================
LOCATION / WEATHER / MOOD
======================================================================*/

setLocation(id,coords){

return this.update(

id,

{location:coords}

);

},

setWeather(id,weather){

return this.update(

id,

{weather}

);

},

setMood(id,mood){

return this.update(

id,

{mood}

);

},

/*======================================================================
TAGS
======================================================================*/

addTag(id,tag){

const entry=

this.get(id);

if(!entry) return false;

if(!entry.tags.includes(tag)){

entry.tags.push(tag);

entry.updatedAt=Date.now();

this.save();

}

return true;

},

removeTag(id,tag){

const entry=

this.get(id);

if(!entry) return false;

entry.tags=

entry.tags.filter(

item=>item!==tag

);

entry.updatedAt=Date.now();

this.save();

return true;

},

/*======================================================================
SORT
======================================================================*/

sort(by="date",direction="desc"){

const sorted=[...this.entries];

sorted.sort((a,b)=>{

let x;

let y;

if(by==="title"){

x=(a.title||"").toLowerCase();

y=(b.title||"").toLowerCase();

}

else{

x=a.createdAt;

y=b.createdAt;

}

if(x<y) return direction==="asc"?-1:1;

if(x>y) return direction==="asc"?1:-1;

return 0;

});

return sorted;

},

/*======================================================================
SEARCH
======================================================================*/

search(query){

const value=

String(query||"")

.trim()

.toLowerCase();

if(!value) return this.entries;

return this.entries.filter(entry=>{

const haystack=[

entry.title,

entry.text,

entry.location?.name,

...(entry.tags||[])

]

.filter(Boolean)

.join(" ")

.toLowerCase();

return haystack.includes(value);

});

},

/*======================================================================
PERSIST
======================================================================*/

save(){

Storage.set(

"journal",

this.entries

);

document.dispatchEvent(

new Event(

"journal:update"

)

);

},

/*======================================================================
EXPORT (backup / future sync)
======================================================================*/

export(){

return [...this.entries];

},

count(){

return this.entries.length;

}

};

/*======================================================================
END OF FILE
======================================================================*/
