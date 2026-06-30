/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/theme.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
THEME ENGINE

Responsibilities

• Light / Dark mode
• Destination themes
• System preference
• Theme persistence
• Runtime switching

======================================================================*/

"use strict";

const Theme={

current:"light",

trip:"default",

mediaQuery:null,

/*======================================================================
INIT
======================================================================*/

init(){

this.mediaQuery=

window.matchMedia(

"(prefers-color-scheme: dark)"

);

this.mediaQuery.addEventListener(

"change",

event=>{

if(

Storage.get(

"theme-mode",

"manual"

)==="system"

){

this.set(

event.matches

? "dark"

: "light"

);

}

}

);

},

/*======================================================================
SET THEME
======================================================================*/

set(theme="light"){

this.current=theme;

document.documentElement.setAttribute(

"data-theme",

theme

);

Storage.set(

"theme",

theme

);

State.set(

"theme",

theme

);

document.dispatchEvent(

new CustomEvent(

"theme:change",

{

detail:{theme}

}

)

);

},

/*======================================================================
TOGGLE
======================================================================*/

toggle(){

this.set(

this.current==="light"

? "dark"

: "light"

);

},

/*======================================================================
SYSTEM
======================================================================*/

useSystem(){

Storage.set(

"theme-mode",

"system"

);

this.set(

this.mediaQuery.matches

? "dark"

: "light"

);

},

/*======================================================================
TRIP THEME
======================================================================*/

setTrip(theme){

this.trip=theme;

document.documentElement.setAttribute(

"data-trip-theme",

theme

);

Storage.set(

"trip-theme",

theme

);

document.dispatchEvent(

new CustomEvent(

"trip-theme:change",

{

detail:{theme}

}

)

);

},

/*======================================================================
REMOVE TRIP THEME
======================================================================*/

clearTrip(){

this.trip="default";

document.documentElement.removeAttribute(

"data-trip-theme"

);

Storage.remove(

"trip-theme"

);

},

/*======================================================================
RESTORE
======================================================================*/

restore(){

const theme=

Storage.get(

"theme",

"light"

);

const trip=

Storage.get(

"trip-theme",

"default"

);

this.set(theme);

if(trip!=="default"){

this.setTrip(trip);

}

},

/*======================================================================
IS DARK
======================================================================*/

isDark(){

return this.current==="dark";

},

/*======================================================================
IS LIGHT
======================================================================*/

isLight(){

return this.current==="light";

}

};

/*======================================================================
END OF FILE
======================================================================*/
