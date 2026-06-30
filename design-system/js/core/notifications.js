/*======================================================================
PRODUCT.......: My Journey
MODULE........: Notifications
FILE..........: js/core/notifications.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Notifications={

permission:"default",

async init(){

if(!("Notification" in window)) return;

this.permission=

Notification.permission;

},

async request(){

if(!("Notification" in window)) return;

this.permission=

await Notification.requestPermission();

},

show(title,options={}){

if(

this.permission!=="granted"

) return;

new Notification(

title,

options

);

},

tripReminder(text){

this.show(

"My Journey",

{

body:text,

icon:"/icons/icon-192.png",

tag:"journey"

}

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
