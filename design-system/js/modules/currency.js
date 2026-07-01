/*======================================================================
PRODUCT.......: My Journey
MODULE........: Currency
FILE..........: js/modules/currency.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Currency={

current:"EUR",

rates:{EUR:1},

init(){

this.current=

Storage.get(

"currency",

"EUR"

);

this.rates=

Storage.get(

"currency-rates",

{EUR:1}

);

},

set(code){

this.current=code;

Storage.set(

"currency",

code

);

},

updateRates(rates){

this.rates=rates;

Storage.set(

"currency-rates",

rates

);

},

convert(amount,from,to=this.current){

if(from===to) return amount;

const eur=

amount/this.rates[from];

return eur*this.rates[to];

},

format(amount,currency=this.current){

return new Intl.NumberFormat(

Language.get()==="it"

?"it-IT"

:"en-US",

{

style:"currency",

currency

}

).format(amount);

}

};

/*======================================================================
END OF FILE
======================================================================*/
