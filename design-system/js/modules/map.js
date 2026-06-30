/*======================================================================
PRODUCT.......: My Journey
MODULE........: Map
FILE..........: js/modules/map.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / Leaflet
======================================================================
JOURNEY MAP

Responsibilities

• Map initialization
• Marker management
• Route rendering
• Fit bounds
• Current position
• Playback
• Marker selection
• Synchronization with Timeline

======================================================================*/

"use strict";

const JourneyMap={

map:null,

layer:null,

markers:new Map(),

route:null,

currentMarker:null,

/*======================================================================
INIT
======================================================================*/

init(){

const container=

document.getElementById("journey-map");

if(!container) return;

this.map=L.map(container,{

zoomControl:false,

attributionControl:false

});

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

maxZoom:20

}

).addTo(this.map);

this.layer=L.layerGroup()

.addTo(this.map);

this.map.setView(

[41.9028,12.4964],

13

);

this.bind();

},

/*======================================================================
EVENTS
======================================================================*/

bind(){

document.addEventListener(

"timeline:current",

event=>{

this.focusMarker(

event.detail.id

);

}

);

},

/*======================================================================
ADD MARKER
======================================================================*/

addMarker(data){

const marker=L.marker(

[data.lat,data.lng]

)

.addTo(this.layer);

marker.bindPopup(

data.title

);

marker.on(

"click",

()=>{

this.selectMarker(

data.id

);

}

);

this.markers.set(

data.id,

marker

);

},

/*======================================================================
REMOVE
======================================================================*/

removeMarker(id){

const marker=

this.markers.get(id);

if(!marker) return;

this.layer.removeLayer(marker);

this.markers.delete(id);

},

/*======================================================================
SELECT
======================================================================*/

selectMarker(id){

this.currentMarker=id;

State.set(

"map.selectedMarker",

id

);

document.dispatchEvent(

new CustomEvent(

"map:select",

{

detail:{id}

}

)

);

},

/*======================================================================
FOCUS
======================================================================*/

focusMarker(id){

const marker=

this.markers.get(id);

if(!marker) return;

this.map.flyTo(

marker.getLatLng(),

16,

{

duration:1.1

}

);

marker.openPopup();

},

/*======================================================================
ROUTE
======================================================================*/

drawRoute(points){

if(this.route){

this.map.removeLayer(

this.route

);

}

this.route=L.polyline(

points,

{

color:

"var(--trip-accent)",

weight:5,

opacity:.95

}

).addTo(this.map);

this.map.fitBounds(

this.route.getBounds(),

{

padding:[40,40]

}

);

},

/*======================================================================
CURRENT POSITION
======================================================================*/

locate(){

this.map.locate({

setView:true,

maxZoom:16

});

},

/*======================================================================
CLEAR
======================================================================*/

clear(){

this.layer.clearLayers();

this.markers.clear();

if(this.route){

this.map.removeLayer(

this.route

);

this.route=null;

}

},

/*======================================================================
REFRESH
======================================================================*/

refresh(){

this.map.invalidateSize();

}

};

/*======================================================================
END OF FILE
======================================================================*/
