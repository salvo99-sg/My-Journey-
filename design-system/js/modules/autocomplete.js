/*======================================================================
PRODUCT.......: My Journey
MODULE........: Search
FILE..........: js/modules/autocomplete.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
AUTOCOMPLETE

Responsibilities

• Destination suggestions
• Recent searches
• Keyboard navigation
• Highlight matches
• Selection
• API-ready architecture

======================================================================*/

"use strict";

const Autocomplete={

input:null,

dropdown:null,

suggestions:[],

filtered:[],

selectedIndex:-1,

maxResults:8,

/*======================================================================
INIT
======================================================================*/

init(){

this.input=document.querySelector(

"[data-autocomplete]"

);

this.dropdown=document.querySelector(

"[data-autocomplete-results]"

);

if(!this.input || !this.dropdown) return;

this.load();

this.bind();

},

/*======================================================================
LOAD
======================================================================*/

load(){

this.suggestions=

Storage.get(

"autocomplete",

[]

);

},

/*======================================================================
EVENTS
======================================================================*/

bind(){

this.input.addEventListener(

"input",

event=>{

this.filter(

event.target.value

);

});

this.input.addEventListener(

"keydown",

event=>{

switch(event.key){

case"ArrowDown":

event.preventDefault();

this.next();

break;

case"ArrowUp":

event.preventDefault();

this.previous();

break;

case"Enter":

event.preventDefault();

this.select();

break;

case"Escape":

this.close();

break;

}

});

document.addEventListener(

"click",

event=>{

if(

!event.target.closest(

"[data-autocomplete-wrapper]"

)

){

this.close();

}

});

},

/*======================================================================
FILTER
======================================================================*/

filter(value){

const query=

value

.trim()

.toLowerCase();

if(!query){

this.close();

return;

}

this.filtered=

this.suggestions

.filter(item=>

item

.toLowerCase()

.includes(query)

)

.slice(

0,

this.maxResults

);

this.render();

},

/*======================================================================
RENDER
======================================================================*/

render(){

this.dropdown.innerHTML="";

this.selectedIndex=-1;

this.filtered.forEach(text=>{

const item=

document.createElement("button");

item.type="button";

item.className=

"autocomplete-item";

item.textContent=text;

item.addEventListener(

"click",

()=>{

this.input.value=text;

this.store(text);

this.close();

document.dispatchEvent(

new CustomEvent(

"autocomplete:selected",

{

detail:{value:text}

}

)

);

}

);

this.dropdown.appendChild(item);

});

this.dropdown.hidden=

this.filtered.length===0;

},

/*======================================================================
NEXT
======================================================================*/

next(){

if(!this.filtered.length) return;

this.selectedIndex=

Math.min(

this.selectedIndex+1,

this.filtered.length-1

);

this.updateSelection();

},

/*======================================================================
PREVIOUS
======================================================================*/

previous(){

if(!this.filtered.length) return;

this.selectedIndex=

Math.max(

this.selectedIndex-1,

0

);

this.updateSelection();

},

/*======================================================================
UPDATE
======================================================================*/

updateSelection(){

[

...this.dropdown.children

]

.forEach(

(item,index)=>{

item.classList.toggle(

"is-selected",

index===this.selectedIndex

);

}

);

},

/*======================================================================
SELECT
======================================================================*/

select(){

if(

this.selectedIndex<0

) return;

const value=

this.filtered[

this.selectedIndex

];

this.input.value=value;

this.store(value);

this.close();

document.dispatchEvent(

new CustomEvent(

"autocomplete:selected",

{

detail:{value}

}

)

);

},

/*======================================================================
STORE
======================================================================*/

store(value){

const list=[

value,

...this.suggestions.filter(

item=>item!==value

)

]

.slice(0,25);

this.suggestions=list;

Storage.set(

"autocomplete",

list

);

},

/*======================================================================
CLOSE
======================================================================*/

close(){

this.dropdown.hidden=true;

this.dropdown.innerHTML="";

this.selectedIndex=-1;

}

};

/*======================================================================
END OF FILE
======================================================================*/
