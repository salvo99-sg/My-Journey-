/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI
FILE..........: js/ui/modal.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
MODAL MANAGER

Responsibilities

• Open / Close modals
• Bottom sheets
• Backdrop
• ESC handling
• Focus trap
• Scroll locking
• Modal stack

======================================================================*/

"use strict";

const Modal={

active:null,

stack:[],

backdrop:null,

/*======================================================================
INIT
======================================================================*/

init(){

this.backdrop=

document.querySelector(

".modal-backdrop"

);

document.addEventListener(

"keydown",

event=>{

if(

event.key==="Escape"

){

this.close();

}

});

if(this.backdrop){

this.backdrop.addEventListener(

"click",

()=>this.close()

);

}

},

/*======================================================================
OPEN
======================================================================*/

open(id){

const modal=

document.getElementById(id);

if(!modal) return;

if(this.active){

this.stack.push(this.active.id);

this.active.hidden=true;

}

document.body.classList.add(

"modal-open"

);

this.backdrop?.classList.add(

"is-open"

);

modal.hidden=false;

requestAnimationFrame(()=>{

modal.classList.add(

"is-open"

);

});

this.active=modal;

State.set(

"ui.modal",

id

);

this.focus(modal);

document.dispatchEvent(

new CustomEvent(

"modal:open",

{

detail:{id}

}

)

);

},

/*======================================================================
CLOSE
======================================================================*/

close(){

if(!this.active) return;

const current=this.active;

current.classList.remove(

"is-open"

);

setTimeout(()=>{

current.hidden=true;

},220);

this.active=null;

if(

this.stack.length

){

const previous=

this.stack.pop();

this.open(previous);

return;

}

this.backdrop?.classList.remove(

"is-open"

);

document.body.classList.remove(

"modal-open"

);

State.set(

"ui.modal",

null

);

document.dispatchEvent(

new Event(

"modal:close"

)

);

},

/*======================================================================
TOGGLE
======================================================================*/

toggle(id){

if(

this.active?.id===id

){

this.close();

return;

}

this.open(id);

},

/*======================================================================
FOCUS
======================================================================*/

focus(modal){

const target=

modal.querySelector(

"button,input,select,textarea,[tabindex]"

);

target?.focus();

},

/*======================================================================
CLOSE ALL
======================================================================*/

closeAll(){

while(this.active){

this.close();

}

},

/*======================================================================
IS OPEN
======================================================================*/

isOpen(){

return this.active!==null;

}

};

/*======================================================================
END OF FILE
======================================================================*/
