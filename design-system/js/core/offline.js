/*======================================================================
PRODUCT.......: My Journey
MODULE........: Offline
FILE..........: js/core/offline.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Offline={

init(){

window.addEventListener(

"online",

()=>this.update(true)

);

window.addEventListener(

"offline",

()=>this.update(false)

);

this.update(navigator.onLine);

},

update(status){

document.body.classList.toggle(

"is-offline",

!status

);

State.set(

"offline",

!status

);

document.dispatchEvent(

new CustomEvent(

"offline:change",

{

detail:{online:status}

}

)

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
