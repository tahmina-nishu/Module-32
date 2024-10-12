// 'var' diye kono variable declare korle eta hoisting hoye jay . mane scope er baire (code er j kono jaygay) ei variable k call kora jay ba use kora jay.

for(var i = 0; i < 5; i++){
    console.log('inside var loop',i);
}
console.log(i);     // var diye korar karone loop er baire o use kora jabe.. tobe value ta increase hoye jeta hobe oi value print korbe

for(let j = 0; j < 5; j++){
    console.log('inside let loop',j);
}
//console.log(j);   --> let diye declare korar karone loop er baire dile error dibe

// normal function hoisting hoy
print15();

function print15()
{
    console.log('from function',15);
}

// kintu equation function hoisting hoy na

// print10();  // ei line ta function declaration er porre dile kaj korbe nahoy error asbe

const print10 = function(){
    console.log('inside equation function', 10);
}

print10();


// normal variable declaration age use korle undefined Asbe . kintu declaration er por scope er baire o use kora jabe.
console.log(a);

var a = 5;