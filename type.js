let x = 5;
let y = x;
console.log(x,y);

y = 7;      // evabe reassign korle sudhumatro y er value ta change hobe
console.log(x,y);

// ................

let p = {job: 'web developer'};
let q = p;
console.log(p,q); 

// q = {job: 'front end developer'};      // only q change hobe
// console.log(p,q);

q.job = 'back end developer';      // p & q duitai change hobe
console.log(p,q);