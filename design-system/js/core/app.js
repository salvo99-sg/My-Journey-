/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/app.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================

APPLICATION CORE

Responsibilities

• Bootstrap application
• Initialize modules
• Lifecycle
• Global events
• Safe startup
• Theme
• Language
• Routing
• Storage
• Offline

======================================================================*/

"use strict";

/*======================================================================
APP
======================================================================*/

const App={

version:"1.0.0",

initialized:false,

modules:{},

config:{

debug:false,

animations:true,

offline:true,

language:"it",

theme:"light"

},

/*======================================================================
BOOT
======================================================================*/

async init(){

if(this.initialized) return;

this.cache();

this.bind();

await this.loadModules();

this.restorePreferences();

this.startModules();

this.initialized=true;

document.documentElement.classList.add("app-ready");

document.dispatchEvent(

new CustomEvent("app:ready")

);

},

/*======================================================================
CACHE
======================================================================*/

cache(){

this.root=document.documentElement;

this.body=document.body;

this.main=document.querySelector("main");

},

/*======================================================================
EVENTS
======================================================================*/

bind(){

window.addEventListener(

"online",

()=>this.online()

);

window.addEventListener(

"offline",

()=>this.offline()

);

document.addEventListener(

"visibilitychange",

()=>this.visibility()

);

window.addEventListener(

"resize",

()=>this.resize()

);

},

/*======================================================================
LOAD MODULES
======================================================================*/

async loadModules(){

this.modules.theme=Theme;

this.modules.router=Router;

this.modules.storage=Storage;

this.modules.modal=Modal;

this.modules.timeline=Timeline;

this.modules.map=JourneyMap;

this.modules.search=Search;

this.modules.language=Language;

this.modules.animations=Animations;

},

/*======================================================================
START
======================================================================*/

startModules(){

Object.values(this.modules)

.forEach(module=>{

if(module?.init){

module.init();

}

});

},

/*======================================================================
PREFERENCES
======================================================================*/

restorePreferences(){

const theme=

Storage.get(

"theme",

"light"

);

const language=

Storage.get(

"language",

"it"

);

Theme.set(theme);

Language.set(language);

},

/*======================================================================
ONLINE
======================================================================*/

online(){

document.body.classList.remove("offline");

},

/*======================================================================
OFFLINE
======================================================================*/

offline(){

document.body.classList.add("offline");

},

/*======================================================================
VISIBILITY
======================================================================*/

visibility(){

if(document.hidden){

document.dispatchEvent(

new Event("app:hidden")

);

return;

}

document.dispatchEvent(

new Event("app:visible")

);

},

/*======================================================================
RESIZE
======================================================================*/

resize(){

document.dispatchEvent(

new Event("app:resize")

);

}

};

/*======================================================================
BOOTSTRAP
======================================================================*/

window.addEventListener(

"DOMContentLoaded",

()=>App.init()

);

/*======================================================================
END OF FILE
======================================================================*/
