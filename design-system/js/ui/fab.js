/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI
FILE..........: js/ui/fab.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const FAB={

button:null,

visible:true,

lastScroll:0,

init(){

this.button=document.querySelector(".fab");

if(!this.button) return;

window.addEventListener(

"scroll",

()=>this.scroll()

);

},

scroll(){

const current=window.scrollY;

if(current>this.lastScroll+20){

this.hide();

}

else if(current<this.lastScroll-20){

this.show();

}

this.lastScroll=current;

},

show(){

if(!this.button) return;

this.visible=true;

this.button.classList.remove("is-hidden");

},

hide(){

if(!this.button) return;

this.visible=false;

this.button.classList.add("is-hidden");

},

toggle(){

this.visible

? this.hide()

: this.show();

}

};

/*======================================================================
END OF FILE
======================================================================*/
