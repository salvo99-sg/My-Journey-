/*======================================================================
PRODUCT.......: My Journey
MODULE........: Core
FILE..........: js/core/constants.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / PWA
======================================================================
APPLICATION CONSTANTS

Global immutable constants.

======================================================================*/

"use strict";

const Constants={

LANGUAGES:Object.freeze([

"it",

"en"

]),

THEMES:Object.freeze([

"light",

"dark"

]),

TRIP_THEMES:Object.freeze([

"default",

"japan",

"italy",

"france",

"greece",

"egypt",

"tropical",

"usa",

"canada",

"iceland",

"norway",

"uk",

"australia",

"brazil",

"morocco",

"india"

]),

TRANSPORT:Object.freeze([

"walk",

"car",

"train",

"bus",

"metro",

"tram",

"flight",

"bike",

"boat"

]),

JOURNEY_STATUS:Object.freeze({

PLANNING:"planning",

ACTIVE:"active",

COMPLETED:"completed",

ARCHIVED:"archived"

}),

BUDGET_CATEGORY:Object.freeze([

"transport",

"hotel",

"food",

"shopping",

"activities",

"insurance",

"other"

]),

PHOTO_TYPES:Object.freeze([

"cover",

"gallery",

"panorama",

"memory"

]),

FILE_TYPES:Object.freeze([

"image/jpeg",

"image/png",

"image/webp"

]),

MAX_UPLOAD_SIZE:20*1024*1024,

MAX_GALLERY_IMAGES:5000,

MAX_TIMELINE_ITEMS:1000,

MAX_NOTE_LENGTH:5000,

AUTOSAVE_INTERVAL:30000,

SYNC_INTERVAL:60000,

MAP_REFRESH_INTERVAL:15000,

DEFAULT_CURRENCY:"EUR",

DEFAULT_LOCALE:"it-IT",

DATE_FORMAT:"dd/MM/yyyy",

TIME_FORMAT:"HH:mm",

APP_EVENTS:Object.freeze({

READY:"app:ready",

ROUTE_CHANGE:"route:change",

THEME_CHANGE:"theme:change",

LANGUAGE_CHANGE:"language:change",

STATE_CHANGE:"state:change",

SEARCH_RESULTS:"search:results",

MODAL_OPEN:"modal:open",

MODAL_CLOSE:"modal:close",

TIMELINE_CURRENT:"timeline:current",

MAP_SELECT:"map:select"

})

};

Object.freeze(Constants);

/*======================================================================
END OF FILE
======================================================================*/
