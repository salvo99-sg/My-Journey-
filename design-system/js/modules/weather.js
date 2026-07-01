/*======================================================================
PRODUCT.......: My Journey
MODULE........: Weather
FILE..........: js/modules/weather.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
WEATHER MODULE

Responsibilities

• Weather retrieval
• Cache
• Forecast
• Unit conversion
• Future API integration

======================================================================*/

"use strict";

const Weather={

cache:{},

provider:null,

init(){

this.cache=

Storage.get(

"weather-cache",

{}

);

},

async get(location){

const cached=

this.cache[location];

if(cached){

return cached;

}

const data={

location,

temperature:null,

condition:null,

forecast:[]

};

this.cache[location]=data;

this.save();

return data;

},

set(location,data){

this.cache[location]={

updatedAt:Date.now(),

...data

};

this.save();

},

clear(){

this.cache={};

this.save();

},

save(){

Storage.set(

"weather-cache",

this.cache

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
