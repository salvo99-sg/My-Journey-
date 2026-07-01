/*======================================================================
PRODUCT.......: My Journey
MODULE........: Map
FILE..........: js/modules/map.js
VERSION.......: 1.0.0
STATUS........: Production Ready
COMPATIBILITY.: Vanilla JavaScript / Mapbox GL JS v3
======================================================================
JOURNEY MAP

Responsibilities

• Map initialization (Mapbox GL JS — Standard style)
• Marker management (custom DOM markers -> map-markers.css)
• Route rendering
• Fit bounds
• Current position
• Playback
• Marker selection
• Synchronization with Timeline

NOTE
Internal implementation migrated from Leaflet to Mapbox GL JS.
The public API is UNCHANGED:
init / addMarker / removeMarker / selectMarker / focusMarker /
drawRoute / locate / clear / refresh

======================================================================*/

"use strict";

const JourneyMap={

token:"pk.eyJ1IjoieGNvc21veCIsImEiOiJjbXFjd2pzZHYwZjB0MnFyOG03cTA4ZXZzIn0.I8FKfkbsa_1A5bZbz4PUEw",

map:null,

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

if(typeof mapboxgl==="undefined") return;

mapboxgl.accessToken=this.token;

const lang=

(typeof Language!=="undefined" && Language.get)

? Language.get()

: "it";

this.map=new mapboxgl.Map({

container,

style:"mapbox://styles/mapbox/standard",

center:[12.4964,41.9028],

zoom:13,

attributionControl:false,

config:{

basemap:{

language:lang

}

}

});

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
INTERNAL — run once the style is ready
======================================================================*/

whenReady(callback){

if(!this.map) return;

if(this.map.isStyleLoaded()){

callback();

return;

}

this.map.once("load",callback);

},

/*======================================================================
INTERNAL — build a custom DOM marker (map-markers.css)
======================================================================*/

element(data){

const el=

document.createElement("div");

el.className="map-marker";

if(data.category){

el.classList.add(

`map-marker--${data.category}`

);

}

if(data.current){

el.classList.add("map-marker--current");

}

const icon=

document.createElement("div");

icon.className="map-marker__icon";

if(data.icon){

const use=document.createElementNS(

"http://www.w3.org/2000/svg",

"svg"

);

const href=document.createElementNS(

"http://www.w3.org/2000/svg",

"use"

);

href.setAttribute(

"href",

`#${data.icon}`

);

use.appendChild(href);

icon.appendChild(use);

}

el.appendChild(icon);

return el;

},

/*======================================================================
ADD MARKER
======================================================================*/

addMarker(data){

if(!this.map) return;

const marker=

new mapboxgl.Marker({

element:this.element(data),

anchor:"bottom"

})

.setLngLat([data.lng,data.lat])

.addTo(this.map);

if(data.title){

marker.setPopup(

new mapboxgl.Popup({offset:24})

.setText(data.title)

);

}

marker.getElement()

.addEventListener(

"click",

()=>this.selectMarker(data.id)

);

this.markers.set(data.id,marker);

},

/*======================================================================
REMOVE
======================================================================*/

removeMarker(id){

const marker=

this.markers.get(id);

if(!marker) return;

marker.remove();

this.markers.delete(id);

},

/*======================================================================
SELECT
======================================================================*/

selectMarker(id){

this.currentMarker=id;

if(typeof State!=="undefined"){

State.set(

"map.selectedMarker",

id

);

}

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

if(!marker || !this.map) return;

this.map.flyTo({

center:marker.getLngLat(),

zoom:16,

duration:1100

});

marker.togglePopup();

},

/*======================================================================
ROUTE
======================================================================*/

drawRoute(points){

if(!this.map || !points || !points.length) return;

const accent=

getComputedStyle(document.documentElement)

.getPropertyValue("--trip-accent")

.trim() || "#D97706";

const geojson={

type:"Feature",

geometry:{

type:"LineString",

coordinates:points

}

};

this.whenReady(()=>{

if(this.map.getSource("route")){

this.map.getSource("route")

.setData(geojson);

}

else{

this.map.addSource("route",{

type:"geojson",

data:geojson

});

this.map.addLayer({

id:"route",

type:"line",

source:"route",

layout:{

"line-cap":"round",

"line-join":"round"

},

paint:{

"line-color":accent,

"line-width":5,

"line-opacity":.95

}

});

}

const bounds=points.reduce(

(b,c)=>b.extend(c),

new mapboxgl.LngLatBounds(

points[0],

points[0]

)

);

this.map.fitBounds(bounds,{

padding:40

});

});

this.route=geojson;

},

/*======================================================================
CURRENT POSITION
======================================================================*/

locate(){

if(!this.map || !navigator.geolocation) return;

navigator.geolocation.getCurrentPosition(

position=>{

this.map.flyTo({

center:[

position.coords.longitude,

position.coords.latitude

],

zoom:16

});

}

);

},

/*======================================================================
CLEAR
======================================================================*/

clear(){

this.markers.forEach(

marker=>marker.remove()

);

this.markers.clear();

if(this.map && this.map.getLayer("route")){

this.map.removeLayer("route");

}

if(this.map && this.map.getSource("route")){

this.map.removeSource("route");

}

this.route=null;

},

/*======================================================================
REFRESH
======================================================================*/

refresh(){

if(this.map){

this.map.resize();

}

},

/*======================================================================
LANGUAGE — keep labels in the app language
======================================================================*/

setLanguage(lang){

if(!this.map) return;

try{

this.map.setConfigProperty(

"basemap",

"language",

lang

);

}

catch(error){}

}

};

/*======================================================================
END OF FILE
======================================================================*/
