/*======================================================================
PRODUCT.......: My Journey
MODULE........: Onboarding
FILE..........: js/modules/onboarding.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Onboarding={

current:0,

slides:[],

container:null,

key:"onboarding-completed",

init(){

if(Storage.get(this.key,false)) return;

this.container=document.getElementById("onboarding");

if(!this.container) return;

this.slides=[
...this.container.querySelectorAll(".onboarding-slide")
];

this.bind();

this.open();

},

bind(){

this.container

.querySelector("[data-next]")

?.addEventListener("click",()=>this.next());

this.container

.querySelector("[data-prev]")

?.addEventListener("click",()=>this.previous());

this.container

.querySelector("[data-skip]")

?.addEventListener("click",()=>this.finish());

},

open(){

Modal.open("onboarding");

this.render();

},

render(){

this.slides.forEach((slide,index)=>{

slide.hidden=index!==this.current;

});

},

next(){

if(this.current>=this.slides.length-1){

this.finish();

return;

}

this.current++;

this.render();

},

previous(){

if(this.current===0) return;

this.current--;

this.render();

},

finish(){

Storage.set(this.key,true);

Modal.close();

document.dispatchEvent(

new Event("onboarding:completed")

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
