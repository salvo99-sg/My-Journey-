/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/config.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / PWA
======================================================================
APPLICATION CONFIGURATION

Global configuration.

This file contains only static configuration.

No runtime logic.

======================================================================*/

"use strict";

const Config={

app:{

name:"My Journey",

shortName:"Journey",

version:"1.0.0",

author:"Bob & Cosmo",

environment:"production"

},

storage:{

namespace:"myjourney",

version:"1.0",

autosave:true,

autosaveDelay:500

},

ui:{

animations:true,

darkMode:true,

defaultLanguage:"it",

defaultTheme:"light",

defaultTripTheme:"default"

},

map:{

provider:"OpenStreetMap",

defaultZoom:13,

minZoom:3,

maxZoom:20,

animationDuration:1000

},

search:{

debounce:220,

historyLimit:10,

autocompleteLimit:8

},

timeline:{

autoExpandCurrentDay:true,

smoothScroll:true

},

gallery:{

lazyLoading:true,

imageQuality:"high"

},

offline:{

enabled:true,

cacheImages:true,

cacheTrips:true

},

pwa:{

installPrompt:true,

backgroundSync:true,

pushNotifications:true

},

debug:false

};

Object.freeze(Config);

/*======================================================================
END OF FILE
======================================================================*/
