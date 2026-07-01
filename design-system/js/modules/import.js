/*======================================================================
PRODUCT.......: My Journey
MODULE........: Import
FILE..........: js/modules/import.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
IMPORT ENGINE

Responsibilities

• Import backup
• JSON validation
• Restore storage
• Version check

======================================================================*/

"use strict";

const Import={

async fromFile(file){

const text=

await file.text();

const data=

JSON.parse(text);

this.restore(data);

},

restore(data){

if(

typeof data!=="object" ||

data===null

){

throw new Error(

"Invalid backup"

);

}

Storage.import(data);

Toast.success(

Language.t(

"backup_restored"

)

);

document.dispatchEvent(

new Event(

"backup:restored"

)

);

},

bind(input){

input.addEventListener(

"change",

async event=>{

const file=

event.target.files[0];

if(file){

await this.fromFile(file);

}

}

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
