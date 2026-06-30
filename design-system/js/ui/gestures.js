/*======================================================================
PRODUCT.......: My Journey
MODULE........: Gestures
FILE..........: js/ui/gestures.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================
GESTURE ENGINE

• Swipe
• Drag
• Touch
• Pull detection

======================================================================*/

"use strict";

const Gestures={

startX:0,

startY:0,

init(){

document.addEventListener(

"touchstart",

event=>{

const t=event.touches[0];

this.startX=t.clientX;

this.startY=t.clientY;

},

{passive:true}

);

document.addEventListener(

"touchend",

event=>{

const t=event.changedTouches[0];

this.detect(

t.clientX,

t.clientY

);

},

{passive:true}

);

},

detect(x,y){

const dx=x-this.startX;

const dy=y-this.startY;

if(

Math.abs(dx)<50 &&

Math.abs(dy)<50

){

return;

}

if(

Math.abs(dx)>

Math.abs(dy)

){

document.dispatchEvent(

new CustomEvent(

dx>0

?

"gesture:swiperight"

:

"gesture:swipeleft"

)

);

return;

}

document.dispatchEvent(

new CustomEvent(

dy>0

?

"gesture:swipedown"

:

"gesture:swipeup"

)

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
