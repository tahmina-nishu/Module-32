/*

truth value-------
    1. any number (positive-negative)
    2. any String
    3. true
    4. {}  (empty object)
    5. []  (empty array)

false value-------
    1. 0(zero)
    2. empty string ('')
    3. false  ('false' hole eta string. tai eta true hobe. quoe na dile false hobe)
    4. any undefiend
    5. null

*/

let a = 0;      // zero
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = 3;      // positive nmbr
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = -6;     // negative nmbr
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = 'abc';      // non-empty string
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = '';      // empty string
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = true;       // boolean true
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = false;      // boolean false
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


a = 'false';        // string
if(a)
    console.log('the statement is true');
else
    console.log('the statement is false');


let b;        // undefined
if(b)
    console.log('the statement is true');
else
    console.log('the statement is false');


b = null;        // undefined
if(b)
    console.log('the statement is true');
else
    console.log('the statement is false');


b = {};        // undefined
if(b)
    console.log('the statement is true');
else
    console.log('the statement is false');


b = [];        // undefined
if(b)
    console.log('the statement is true');
else
    console.log('the statement is false');
