/*======================================================================
PRODUCT.......: My Journey
MODULE........: Currency
FILE..........: js/modules/currency.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================
CURRENCY MODULE

Provider: Frankfurter API (ECB rates, no API key required)
  • Rates: https://api.frankfurter.app/latest?from=EUR

CSP: allow connect-src https://api.frankfurter.app

Provider isolated inside this module.
Public API is unchanged: init / set / updateRates / convert / format

======================================================================*/

"use strict";

const Currency={

current:"EUR",

rates:{EUR:1},

updatedAt:0,

maxAge:21600000,

/*======================================================================
INIT
======================================================================*/

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

this.updatedAt=

Storage.get(

"currency-rates-at",

0

);

this.refresh();

},

/*======================================================================
SET current currency
======================================================================*/

set(code){

this.current=code;

Storage.set(

"currency",

code

);

},

/*======================================================================
UPDATE RATES (manual)
======================================================================*/

updateRates(rates){

this.rates={

EUR:1,

...rates

};

this.updatedAt=Date.now();

Storage.set(

"currency-rates",

this.rates

);

Storage.set(

"currency-rates-at",

this.updatedAt

);

},

/*======================================================================
REFRESH (async) — fetch ECB rates via Frankfurter, base EUR
======================================================================*/

async refresh(){

if(

Date.now()-this.updatedAt<this.maxAge &&

Object.keys(this.rates).length>1

){

return this.rates;

}

try{

const response=

await fetch(

"https://api.frankfurter.app/latest?from=EUR"

);

const json=await response.json();

if(json&&json.rates){

this.updateRates(json.rates);

document.dispatchEvent(

new Event("currency:update")

);

}

}

catch(error){

console.warn("Currency error",error);

}

return this.rates;

},

/*======================================================================
CONVERT (base EUR)
======================================================================*/

convert(amount,from,to=this.current){

if(from===to) return amount;

const rateFrom=this.rates[from];

const rateTo=this.rates[to];

if(!rateFrom || !rateTo) return amount;

const eur=amount/rateFrom;

return eur*rateTo;

},

/*======================================================================
FORMAT
======================================================================*/

format(amount,currency=this.current){

return new Intl.NumberFormat(

(typeof Language!=="undefined" && Language.get && Language.get()==="it")

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
