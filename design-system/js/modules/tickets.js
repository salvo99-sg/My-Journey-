/*======================================================================
PRODUCT.......: My Journey
MODULE........: Tickets
FILE..........: js/modules/tickets.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Tickets={

tickets:[],

init(){

this.tickets=

Storage.get(

"tickets",

[]

);

},

create(ticket){

ticket.id=crypto.randomUUID();

ticket.createdAt=Date.now();

this.tickets.push(ticket);

this.save();

},

remove(id){

this.tickets=

this.tickets.filter(

ticket=>ticket.id!==id

);

this.save();

},

get(id){

return this.tickets.find(

ticket=>ticket.id===id

);

},

all(){

return this.tickets;

},

save(){

Storage.set(

"tickets",

this.tickets

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
