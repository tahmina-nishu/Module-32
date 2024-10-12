function greeting(handler, name){       // ekhane "handler" parameter ta ekta function
    handler(name);
}

function greetingHandler(name){
    console.log('Good Morning', name);
}

greeting(greetingHandler,'tahmina');


/*
Function ta jevabe kaj korbe---->
    1. first e 9 no line e "greeting" function ta call hobe jar parameter thakbe onno ekta function "greetingHandler" ebong ekta string "tahmina"
    2. 2 no line e  abr "greetingHandler" funcion ta callhobe jar parameter thakbe 'name'
    3. tarpor "greetingHandler" function e output dekhabe...
*/

 // ekhn caile onno functiion k o greeting function er maddhome call korte parbo. jemon--

 function greetingEvening(name){
    console.log('Good Evening', name);
}

greeting(greetingEvening,'tahmina');