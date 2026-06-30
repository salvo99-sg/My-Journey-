/*======================================================================
PRODUCT.......: My Journey
MODULE........: Search
FILE..........: js/modules/search.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
SEARCH ENGINE

Responsibilities

• Global search
• Instant filtering
• Debounce
• Recent searches
• Search history
• Suggestions
• Highlight results

======================================================================*/

"use strict";

const Search={

input:null,

results:null,

items:[],

history:[],

timer:null,

delay:220,

/*======================================================================
INIT
======================================================================*/

init(){

this.input=document.querySelector(

"[data-search-input]"

);

this.results=document.querySelector(

"[data-search-results]"

);

if(!this.input) return;

this.history=

Storage.get(

"search-history",

[]

);

this.cache();

this.bind();

},

/*======================================================================
CACHE
======================================================================*/

cache(){

this.items=[

...document.querySelectorAll(

"[data-searchable]"

)

];

},

/*======================================================================
EVENTS
======================================================================*/

bind(){

this.input.addEventListener(

"input",

event=>{

clearTimeout(this.timer);

this.timer=setTimeout(

()=>{

this.search(

event.target.value

);

},

this.delay

);

}

);

this.input.addEventListener(

"keydown",

event=>{

if(event.key==="Escape"){

this.clear();

}

});

},

/*======================================================================
SEARCH
======================================================================*/

search(query){

const value=

query.trim()

.toLowerCase();

if(!value){

this.reset();

return;

}

const matches=

this.items.filter(item=>{

return item.dataset.searchable

.toLowerCase()

.includes(value);

});

this.render(matches);

this.highlight(matches);

this.store(value);

document.dispatchEvent(

new CustomEvent(

"search:results",

{

detail:{

query:value,

count:matches.length

}

}

)

);

},

/*======================================================================
RENDER
======================================================================*/

render(matches){

if(!this.results) return;

this.results.innerHTML="";

matches.forEach(item=>{

this.results.appendChild(

item.cloneNode(true)

);

});

},

/*======================================================================
HIGHLIGHT
======================================================================*/

highlight(matches){

this.items.forEach(item=>{

item.classList.remove(

"is-search-match"

);

});

matches.forEach(item=>{

item.classList.add(

"is-search-match"

);

});

},

/*======================================================================
STORE
======================================================================*/

store(query){

if(

this.history.includes(query)

){

return;

}

this.history.unshift(query);

this.history=

this.history.slice(0,10);

Storage.set(

"search-history",

this.history

);

},

/*======================================================================
RECENT
======================================================================*/

recent(){

return this.history;

},

/*======================================================================
CLEAR
======================================================================*/

clear(){

this.input.value="";

this.reset();

},

/*======================================================================
RESET
======================================================================*/

reset(){

this.items.forEach(item=>{

item.classList.remove(

"is-search-match"

);

});

if(this.results){

this.results.innerHTML="";

}

document.dispatchEvent(

new Event(

"search:reset"

)

);

},

/*======================================================================
REFRESH
======================================================================*/

refresh(){

this.cache();

}

};

/*======================================================================
END OF FILE
======================================================================*/
