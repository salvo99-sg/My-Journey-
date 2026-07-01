/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI
FILE..........: js/ui/loader.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Loader={

element:null,

init(){

this.element=document.getElementById("loader");

},

show(text="Loading..."){

if(!this.element) return;

this.element.hidden=false;

this.element

.querySelector(".loader__text")

.textContent=text;

},

hide(){

if(!this.element) return;

this.element.hidden=true;

},

progress(value){

if(!this.element) return;

const bar=

this.element.querySelector(

".loader__progress"

);

if(bar){

bar.style.width=`${value}%`;

}

}

};

/*======================================================================
END OF FILE
======================================================================*/
