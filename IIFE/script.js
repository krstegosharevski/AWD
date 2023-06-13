/*
(function(){
    var foo = '1.Hello world';
})();
//console.log(foo);   // undefined!


// function statement
function greet(name) {
    console.log('2.Hello ' + name);
}
greet('John');


// using a function expression
var greetFunc = function(name) {
    console.log('3.Hello ' + name);
};
greetFunc('John');


// using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return '4.Hello ' + name;
}('John');
console.log(greeting);


// IIFE
var firstname = 'John';
(function(name) {
    var greeting = '5. Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname)); // IIFE
*/
//IIFE + closure
let greeting = "Hello";
let greetingFunction = (function (greeting){
    return function (firstName){
        console.log(greeting+" "+firstName);
    }
})(greeting);
greetingFunction("John");