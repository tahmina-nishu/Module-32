function sum(a, b, c){
    console.log(arguments);         //parameter er ceye beshi j argument gulo pathano hobe segulo o ekhane chole asbe
    console.log(arguments[4]);  
    const args = [...arguments];        //object k array te convert korbe.
    console.log(args);  

    const result = a + b + c;
    return result;
}

const total = sum(10, 20, 30);
console.log('sum1 = ',total);

const total2 = sum(10, 20, 30, 40, 50, 60);
console.log('sum2 = ',total2);