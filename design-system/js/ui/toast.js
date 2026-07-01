/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI
FILE..........: js/ui/toast.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
TOAST MANAGER

Responsibilities

• Success
• Error
• Warning
• Info
• Auto dismiss
• Queue management

======================================================================*/

"use strict";

const Toast={

container:null,

queue:[],

visible:false,

duration:3500,

init(){

this.container=document.getElementById("toast-container");

if(!this.container){

this.container=document.createElement("div");

this.container.id="toast-container";

this.container.className="toast-container";

document.body.appendChild(this.container);

}

},

show(message,type="info",duration=this.duration){

this.queue.push({

message,

type,

duration

});

if(!this.visible){

this.next();

}

},

next(){

if(!this.queue.length){

this.visible=false;

return;

}

this.visible=true;

const toast=this.create(

this.queue.shift()

);

this.container.appendChild(toast);

requestAnimationFrame(()=>{

toast.classList.add("is-visible");

});

setTimeout(()=>{

toast.classList.remove("is-visible");

setTimeout(()=>{

toast.remove();

this.next();

},250);

},toast.dataset.duration);

},

create(data){

const toast=document.createElement("div");

toast.className=`toast toast--${data.type}`;

toast.dataset.duration=data.duration;

toast.innerHTML=`

<div class="toast__content">

<div class="toast__message">

${data.message}

</div>

<button class="toast__close">

×

</button>

</div>

`;

toast

.querySelector(".toast__close")

.addEventListener(

"click",

()=>{

toast.remove();

this.next();

}

);

return toast;

},

success(message){

this.show(message,"success");

},

error(message){

this.show(message,"error");

},

warning(message){

this.show(message,"warning");

},

info(message){

this.show(message,"info");

}

};

/*======================================================================
END OF FILE
======================================================================*/
