/*======================================================================
PRODUCT.......: My Journey
MODULE........: Icons
FILE..........: js/ui/icons.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: SVG Sprite
======================================================================
ICON MANAGER

Responsibilities

• SVG sprite loader
• Icon creation
• Lazy loading
• Theme aware

======================================================================*/

"use strict";

const Icons={

sprite:"/icons/icons.svg",

loaded:false,

async init(){

if(this.loaded) return;

await fetch(this.sprite);

this.loaded=true;

},

create(name,className=""){

const svg=document.createElementNS(

"http://www.w3.org/2000/svg",

"svg"

);

svg.classList.add("icon");

if(className){

svg.classList.add(className);

}

const use=document.createElementNS(

"http://www.w3.org/2000/svg",

"use"

);

use.setAttribute(

"href",

`${this.sprite}#${name}`

);

svg.appendChild(use);

return svg;

},

replace(){

document

.querySelectorAll("[data-icon]")

.forEach(element=>{

const icon=this.create(

element.dataset.icon

);

element.replaceWith(icon);

});

}

};

/*======================================================================
END OF FILE
======================================================================*/
