
// parameter e 'premitive type' hole function e value change korle outer scope e change hobe na

let num1 = 5;
let num2 = 10;

function change(a, b){
    a = 20;
    b = 30;
}

console.log('Before Change :')
console.log(num1);
console.log(num2);

console.log('After Change :')
change(num1, num2)

console.log(num1);
console.log(num2);


// parameter e 'Non premitive type' hole function e value change korle outer scope e o change hobe

let student1 = {name: 'Borsha', id: 1};
let student2 = {name: 'Anika', id: 2};

function makeChange(stu1, stu2){
    stu1.name = 'Mim';
    stu2.name = 'Nabila';
}

console.log('Before Change :')
console.log(student1, student2);        // function ta call korar age print korle change ta asbe na

makeChange(student1, student2)
console.log('After Change :')
console.log(student1, student2);         // function ta call korar pore print korle change ta asbe 

/*
    Object & array are pass by reference
    premitive types are pass by value
*/