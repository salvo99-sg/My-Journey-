/*======================================================================
PRODUCT.......: My Journey
MODULE........: Share
FILE..........: js/modules/share.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Share={

async journey(data){

if(navigator.share){

return navigator.share({

title:data.title,

text:data.description,

url:data.url

});

}

return this.copy(data.url);

},

async copy(text){

await navigator.clipboard.writeText(text);

Toast.success(

Language.t("link_copied")

);

},

async image(blob){

if(

navigator.canShare &&

navigator.canShare({

files:[

new File(

[blob],

"journey.png",

{type:"image/png"}

)

]

})

){

const file=new File(

[blob],

"journey.png",

{type:"image/png"}

);

return navigator.share({

files:[file]

});

}

}

};

/*======================================================================
END OF FILE
======================================================================*/
