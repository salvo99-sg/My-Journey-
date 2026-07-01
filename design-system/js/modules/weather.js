/*======================================================================
PRODUCT.......: My Journey
MODULE........: Weather
FILE..........: js/modules/weather.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript
======================================================================
WEATHER MODULE

Provider: Open-Meteo (no API key required)
  • Geocoding : https://geocoding-api.open-meteo.com/v1/search
  • Forecast  : https://api.open-meteo.com/v1/forecast

CSP: allow connect-src https://geocoding-api.open-meteo.com https://api.open-meteo.com

The provider is fully isolated inside this module.
Public API is unchanged: init / get / set / clear / save

======================================================================*/

"use strict";

const Weather={

cache:{},

maxAge:3600000,

/*======================================================================
WMO weather codes -> condition key (for i18n / icons)
======================================================================*/

conditions:{

0:"clear",

1:"mostly-clear",

2:"partly-cloudy",

3:"overcast",

45:"fog",

48:"fog",

51:"drizzle",

53:"drizzle",

55:"drizzle",

61:"rain",

63:"rain",

65:"rain",

71:"snow",

73:"snow",

75:"snow",

80:"showers",

81:"showers",

82:"showers",

95:"thunderstorm",

96:"thunderstorm",

99:"thunderstorm"

},

/*======================================================================
INIT
======================================================================*/

init(){

this.cache=

Storage.get(

"weather-cache",

{}

);

},

/*======================================================================
GET (async) — cached, else fetched from Open-Meteo
======================================================================*/

async get(location){

const key=

String(location||"").trim();

if(!key) return null;

const cached=

this.cache[key];

if(

cached &&

Date.now()-cached.updatedAt<this.maxAge

){

return cached;

}

try{

const coords=

await this.geocode(key);

if(!coords) return cached||null;

const data=

await this.forecast(coords);

const result={

location:key,

lat:coords.lat,

lng:coords.lng,

...data

};

this.set(key,result);

return result;

}

catch(error){

console.warn("Weather error",error);

return cached||null;

}

},

/*======================================================================
GEOCODE (name -> coordinates)
======================================================================*/

async geocode(name){

const lang=

(typeof Language!=="undefined" && Language.get)

? Language.get()

: "it";

const url=

`https://geocoding-api.open-meteo.com/v1/search`+

`?name=${encodeURIComponent(name)}&count=1&language=${lang}`;

const response=await fetch(url);

const json=await response.json();

const place=json.results&&json.results[0];

if(!place) return null;

return{

lat:place.latitude,

lng:place.longitude

};

},

/*======================================================================
FORECAST (coordinates -> current + daily)
======================================================================*/

async forecast(coords){

const url=

`https://api.open-meteo.com/v1/forecast`+

`?latitude=${coords.lat}&longitude=${coords.lng}`+

`&current=temperature_2m,weather_code`+

`&daily=weather_code,temperature_2m_max,temperature_2m_min`+

`&timezone=auto&forecast_days=5`;

const response=await fetch(url);

const json=await response.json();

const current=json.current||{};

const daily=json.daily||{};

const forecast=(daily.time||[]).map((date,index)=>({

date,

condition:this.condition(daily.weather_code?.[index]),

max:daily.temperature_2m_max?.[index],

min:daily.temperature_2m_min?.[index]

}));

return{

temperature:current.temperature_2m,

condition:this.condition(current.weather_code),

forecast

};

},

/*======================================================================
CONDITION KEY
======================================================================*/

condition(code){

return this.conditions[code]||"unknown";

},

/*======================================================================
SET / CLEAR / SAVE
======================================================================*/

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
