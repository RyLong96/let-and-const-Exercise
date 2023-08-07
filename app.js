//ES5 Global Constants

// var PI = 3.14;
// PI = 42;

let PI = 3.14;

PI = PI + 38.86;

console.log(PI)

//What is the difference between var and let?
//Var is used on the global scope and be redclared

//What is the difference between var and const?
//You cannot redceclare or reassign using const.

//What is the difference between let and const?
//You can reassing let, but can't reassing or redclare with const.

//What is hoisting?
//Variable are sent to the top of the scope that they are declared in. Var will allow you to access something that in undefined, so it will be sent to the top of scope. If you try to access a let or const undeclared variable, you will receive an error. 