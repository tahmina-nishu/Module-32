// 7 Ways to get undefined --->

    // 1. variable that is not initialized  --- 
    
    let first;
    console.log(first);

    // 2. Function with no return ---

    function second(a,b){
        const total = a + b;
    }

    const result = second();
    console.log(result);

    // 3. parameter that is not passed

    function third(a, b, c, d){
        const total = a + b + c + d;
        console.log(a, b, c, d);    
    }
    third(2,5);

    // 4. if return has nothing on the right side

    function noNegative(a,b){
        if(a < 0 || b < 0){
            return
        }
        return a + b;
    }

    const total = noNegative(2,5);
    console.log(total);

    const total2 = noNegative(2,-5);
    console.log(total2);

    // 5. property that doesn't exist in an object

    const fifth = {id: 2, name: 'Rahi', age: 40}
    console.log(fifth.name, fifth.salary);

    // 6. accesing array elements outside of the index range

    const sixth = [5, 10, 15, 20, 25];
    console.log(sixth[5]);

    // 7. element that is deleted

    const seventh = [5, 10, 15, 20, 25];
    delete seventh[1];
    console.log(seventh[1]);