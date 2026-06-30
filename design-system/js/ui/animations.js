/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI
FILE..........: js/ui/animations.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
ANIMATION ENGINE

Responsibilities

• Page transitions
• Scroll reveal
• Stagger animations
• Counters
• Progress bars
• Reduced motion support
• Global animation helpers

======================================================================*/

"use strict";

const Animations={

observer:null,

reducedMotion:false,

/*======================================================================
INIT
======================================================================*/

init(){

this.reducedMotion=

window.matchMedia(

"(prefers-reduced-motion: reduce)"

).matches;

if(this.reducedMotion) return;

this.createObserver();

this.observe();

},

/*======================================================================
OBSERVER
======================================================================*/

createObserver(){

this.observer=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"is-visible"

);

this.observer.unobserve(

entry.target

);

}

});

},

{

threshold:.15,

rootMargin:"0px 0px -60px 0px"

}

);

},

/*======================================================================
OBSERVE
======================================================================*/

observe(){

document

.querySelectorAll(

"[data-animate]"

)

.forEach(element=>{

this.observer.observe(

element

);

});

},

/*======================================================================
REVEAL
======================================================================*/

reveal(element){

if(!element) return;

element.classList.remove(

"is-visible"

);

requestAnimationFrame(()=>{

element.classList.add(

"is-visible"

);

});

},

/*======================================================================
STAGGER
======================================================================*/

stagger(selector,delay=70){

document

.querySelectorAll(selector)

.forEach((element,index)=>{

element.style.animationDelay=

`${index*delay}ms`;

element.classList.add(

"fade-up"

);

});

},

/*======================================================================
COUNTER
======================================================================*/

counter(element,target,duration=1200){

if(!element) return;

const start=0;

const startTime=

performance.now();

const animate=now=>{

const progress=

Math.min(

(now-startTime)/duration,

1

);

const value=

Math.floor(

start+

(target-start)*progress

);

element.textContent=value;

if(progress<1){

requestAnimationFrame(animate);

}

};

requestAnimationFrame(animate);

},

/*======================================================================
PROGRESS BAR
======================================================================*/

progress(element,value){

if(!element) return;

requestAnimationFrame(()=>{

element.style.width=

`${value}%`;

});

},

/*======================================================================
SHAKE
======================================================================*/

shake(element){

if(!element) return;

element.classList.remove("shake");

void element.offsetWidth;

element.classList.add("shake");

},

/*======================================================================
PULSE
======================================================================*/

pulse(element){

if(!element) return;

element.classList.remove("pulse");

void element.offsetWidth;

element.classList.add("pulse");

},

/*======================================================================
REMOVE
======================================================================*/

remove(element,className){

if(!element) return;

element.classList.remove(className);

},

/*======================================================================
REFRESH
======================================================================*/

refresh(){

if(this.reducedMotion) return;

this.observe();

}

};

/*======================================================================
END OF FILE
======================================================================*/
