/*======================================================================
PRODUCT.......: My Journey
MODULE........: UI Controls
FILE..........: js/ui/ui-controls.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const UIControls={

init(){

this.tabs();

this.accordions();

this.bottomNavigation();

},

tabs(){

document

.querySelectorAll("[data-tab]")

.forEach(button=>{

button.addEventListener("click",()=>{

const group=button.dataset.tabGroup;

document

.querySelectorAll(`[data-tab-group="${group}"]`)

.forEach(tab=>tab.classList.remove("is-active"));

document

.querySelectorAll(`[data-panel-group="${group}"]`)

.forEach(panel=>panel.hidden=true);

button.classList.add("is-active");

document

.getElementById(button.dataset.target)

.hidden=false;

});

});

},

accordions(){

document

.querySelectorAll("[data-accordion]")

.forEach(item=>{

item

.querySelector("[data-toggle]")

?.addEventListener("click",()=>{

item.classList.toggle("is-open");

});

});

},

bottomNavigation(){

document

.querySelectorAll("[data-route]")

.forEach(item=>{

item.addEventListener("click",()=>{

Router.go(item.dataset.route);

});

});

}

};

/*======================================================================
END OF FILE
======================================================================*/
