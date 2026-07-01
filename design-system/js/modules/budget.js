/*======================================================================
PRODUCT.......: My Journey
MODULE........: Budget
FILE..........: js/modules/budget.js
VERSION.......: 1.0.0
STATUS........: Production Ready
======================================================================*/

"use strict";

const Budget={

budget:0,

expenses:[],

currency:"EUR",

init(){

this.budget=

Storage.get(

"budget-total",

0

);

this.currency=

Storage.get(

"budget-currency",

"EUR"

);

this.expenses=

Storage.get(

"expenses",

[]

);

},

setBudget(value){

this.budget=value;

Storage.set(

"budget-total",

value

);

},

setCurrency(currency){

this.currency=currency;

Storage.set(

"budget-currency",

currency

);

},

addExpense(expense){

expense.id=crypto.randomUUID();

expense.createdAt=Date.now();

this.expenses.push(expense);

this.save();

},

removeExpense(id){

this.expenses=

this.expenses.filter(

expense=>expense.id!==id

);

this.save();

},

spent(){

return this.expenses.reduce(

(total,item)=>

total+item.amount,

0

);

},

remaining(){

return this.budget-

this.spent();

},

percentage(){

if(this.budget<=0) return 0;

return Math.min(

100,

Math.round(

(this.spent()/this.budget)*100

)

);

},

save(){

Storage.set(

"expenses",

this.expenses

);

}

};

/*======================================================================
END OF FILE
======================================================================*/
