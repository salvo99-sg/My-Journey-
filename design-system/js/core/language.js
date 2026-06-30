/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/language.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / HTML5 / CSS3 / PWA
======================================================================
LANGUAGE ENGINE

Responsibilities

• IT / EN localization
• Runtime language switch
• Translation lookup
• DOM auto-update
• Persistence

======================================================================*/

"use strict";

const Language={

current:"it",

dictionary:{},

/*======================================================================
INIT
======================================================================*/

init(){

this.restore();

this.translatePage();

},

/*======================================================================
SET
======================================================================*/

set(language){

this.current=language;

document.documentElement.lang=language;

Storage.set(

"language",

language

);

State.set(

"language",

language

);

this.translatePage();

document.dispatchEvent(

new CustomEvent(

"language:change",

{

detail:{language}

}

)

);

},

/*======================================================================
TOGGLE
======================================================================*/

toggle(){

this.set(

this.current==="it"

? "en"

: "it"

);

},

/*======================================================================
REGISTER
======================================================================*/

register(data){

this.dictionary=data;

},

/*======================================================================
TRANSLATE
======================================================================*/

t(key){

return(

this.dictionary?.[this.current]?.[key]

??

key

);

},

/*======================================================================
PAGE
======================================================================*/

translatePage(){

document

.querySelectorAll(

"[data-i18n]"

)

.forEach(element=>{

const key=

element.dataset.i18n;

element.textContent=

this.t(key);

});

document

.querySelectorAll(

"[data-i18n-placeholder]"

)

.forEach(element=>{

const key=

element.dataset.i18nPlaceholder;

element.placeholder=

this.t(key);

});

document

.querySelectorAll(

"[data-i18n-title]"

)

.forEach(element=>{

const key=

element.dataset.i18nTitle;

element.title=

this.t(key);

});

document

.querySelectorAll(

"[data-i18n-aria]"

)

.forEach(element=>{

const key=

element.dataset.i18nAria;

element.setAttribute(

"aria-label",

this.t(key)

);

});

},

/*======================================================================
RESTORE
======================================================================*/

restore(){

const language=

Storage.get(

"language",

navigator.language.startsWith("it")

? "it"

: "en"

);

this.current=language;

document.documentElement.lang=language;

},

/*======================================================================
GET
======================================================================*/

get(){

return this.current;

}

};

/*======================================================================
END OF FILE
======================================================================*/
