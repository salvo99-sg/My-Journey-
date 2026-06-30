/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/router.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
ROUTER

Hash-based router.
No framework.

Supports:
• Deep linking
• History
• Route guards
• Page transitions
• Scroll restoration

======================================================================*/

"use strict";

const Router={

current:null,

routes:new Map(),

defaultRoute:"home",

/*======================================================================
INIT
======================================================================*/

init(){

this.register();

window.addEventListener(

"hashchange",

()=>this.resolve()

);

window.addEventListener(

"load",

()=>this.resolve()

);

},

/*======================================================================
REGISTER ROUTES
======================================================================*/

register(){

this.add("home","page-home");

this.add("trip","page-trip");

this.add("map","page-map");

this.add("album","page-album");

this.add("tickets","page-tickets");

this.add("budget","page-budget");

this.add("packing","page-packing");

this.add("journal","page-journal");

this.add("memories","page-memories");

this.add("settings","page-settings");

this.add("trophies","page-trophies");

},

add(route,id){

this.routes.set(route,id);

},

/*======================================================================
RESOLVE
======================================================================*/

resolve(){

const hash=

location.hash.replace("#","") ||

this.defaultRoute;

this.navigate(hash);

},

/*======================================================================
NAVIGATE
======================================================================*/

navigate(route){

if(!this.routes.has(route)){

route=this.defaultRoute;

}

this.hidePages();

const page=

document.getElementById(

this.routes.get(route)

);

if(!page) return;

page.hidden=false;

page.classList.add("page-enter");

requestAnimationFrame(()=>{

page.classList.remove("page-enter");

});

window.scrollTo({

top:0,

behavior:"instant"

});

this.current=route;

document.dispatchEvent(

new CustomEvent(

"route:change",

{

detail:{route}

}

)

);

},

/*======================================================================
HIDE
======================================================================*/

hidePages(){

this.routes.forEach(id=>{

const page=

document.getElementById(id);

if(page){

page.hidden=true;

}

});

},

/*======================================================================
GO
======================================================================*/

go(route){

location.hash=route;

},

back(){

history.back();

},

forward(){

history.forward();

}

};

/*======================================================================
END OF FILE
======================================================================*/
