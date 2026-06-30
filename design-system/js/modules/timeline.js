/*======================================================================
PRODUCT.......: My Journey
MODULE........: Journey
FILE..........: js/modules/timeline.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
TIMELINE ENGINE

Responsibilities

• Daily itinerary
• Expand / Collapse
• Current activity
• Reordering
• Drag & Drop ready
• Timeline playback
• Auto-scroll

======================================================================*/

"use strict";

const Timeline={

container:null,

days:[],

currentDay:null,

currentStop:null,

/*======================================================================
INIT
======================================================================*/

init(){

this.container=

document.querySelector(

".journey-timeline"

);

if(!this.container) return;

this.cache();

this.bind();

},

/*======================================================================
CACHE
======================================================================*/

cache(){

this.days=[

...document.querySelectorAll(

".timeline-day"

)

];

},

/*======================================================================
EVENTS
======================================================================*/

bind(){

this.days.forEach(day=>{

const header=

day.querySelector(

".timeline-day__header"

);

header?.addEventListener(

"click",

()=>this.toggle(day)

);

});

},

/*======================================================================
TOGGLE
======================================================================*/

toggle(day){

day.classList.toggle(

"is-open"

);

document.dispatchEvent(

new CustomEvent(

"timeline:toggle",

{

detail:{

day:

day.dataset.day

}

}

)

);

},

/*======================================================================
OPEN
======================================================================*/

open(index){

const day=

this.days[index];

if(!day) return;

day.classList.add(

"is-open"

);

},

/*======================================================================
CLOSE
======================================================================*/

close(index){

const day=

this.days[index];

if(!day) return;

day.classList.remove(

"is-open"

);

},

/*======================================================================
OPEN ALL
======================================================================*/

expandAll(){

this.days.forEach(day=>{

day.classList.add(

"is-open"

);

});

},

/*======================================================================
COLLAPSE ALL
======================================================================*/

collapseAll(){

this.days.forEach(day=>{

day.classList.remove(

"is-open"

);

});

},

/*======================================================================
CURRENT STOP
======================================================================*/

setCurrent(id){

document

.querySelectorAll(

".timeline-stop"

)

.forEach(stop=>{

stop.classList.remove(

"is-current"

);

});

const stop=

document.getElementById(id);

if(!stop) return;

stop.classList.add(

"is-current"

);

this.currentStop=id;

stop.scrollIntoView({

behavior:"smooth",

block:"center"

});

document.dispatchEvent(

new CustomEvent(

"timeline:current",

{

detail:{id}

}

)

);

},

/*======================================================================
DAY
======================================================================*/

selectDay(day){

this.currentDay=day;

State.set(

"currentDay",

day

);

document.dispatchEvent(

new CustomEvent(

"timeline:day",

{

detail:{day}

}

)

);

},

/*======================================================================
PLAYBACK
======================================================================*/

play(){

document.dispatchEvent(

new Event(

"timeline:play"

)

);

},

pause(){

document.dispatchEvent(

new Event(

"timeline:pause"

)

);

},

stop(){

document.dispatchEvent(

new Event(

"timeline:stop"

)

);

},

/*======================================================================
REFRESH
======================================================================*/

refresh(){

this.cache();

this.bind();

}

};

/*======================================================================
END OF FILE
======================================================================*/
