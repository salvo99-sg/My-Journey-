/*======================================================================
PRODUCT.......: My Journey
MODULE........: Export
FILE..........: js/modules/export.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Export={

json(){

const data=Storage.export();

const blob=new Blob(

[

JSON.stringify(

data,

null,

2

)

],

{

type:"application/json"

}

);

this.download(

blob,

"my-journey-backup.json"

);

},

download(blob,name){

const url=

URL.createObjectURL(blob);

const link=

document.createElement("a");

link.href=url;

link.download=name;

link.click();

URL.revokeObjectURL(url);

}

};

/*======================================================================
END OF FILE
======================================================================*/
