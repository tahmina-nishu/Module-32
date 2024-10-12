// ekta function er vitor arekta function declare korle tara nijer  jonno ekta scope create kore kore. eta k "Closer" bole 
function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const watch1 = stopWatch();
console.log(watch1);

