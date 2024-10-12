// == dile only value check kore === dile value & type duitai check kore

let first = 2;
let second = '2';

if(first == second)
    console.log('values are equal');
else
    console.log('values are not equal');


if(first === second)
    console.log('values are equal');
else
    console.log('values are not equal');

// object or array k directly equal diye check korle false dekhay. tai egulo k loop caliye index onujayi check korte hobe

first = [];
second = [];

if(first == second)
    console.log('values are equal');
else
    console.log('values are not equal');


if(first === second)
    console.log('values are equal');
else
    console.log('values are not equal');