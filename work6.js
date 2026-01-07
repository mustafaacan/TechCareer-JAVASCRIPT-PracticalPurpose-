
const Name = prompt("Enter Your Name Here: ");


// Without parameter and return

function WpWr(){
    console.log("Function without parameter and return.");
}

WpWr();

// With parameter and  without return

function WithPWr(name){
    console.log(`Hello ${name}`);
}

WithPWr(Name);


// Without parameter and  with return

function WpWithR(){
    return 'no parameter but has return';
}

console.log(`The function has ${WpWithR()}`)
WpWithR();


// With parameter and  with return

function withPWithR(name){
    return name;
}

console.log(`Hello ${withPWithR(Name)}. This is a function that has both parameter and return`);



// FUNCTION TYPES



// Function Decleration & Named Function Decleration

const fun1 = function(a,b){return a+b;}
const fun2 = function Calculate(a,b){return a+b;}

console.log(`The result: ${fun1(3,5)}`);
console.log(`The result: ${fun2(3,5)}`);


//Arrow functions

const fun3 = (a,b) => a+b;
console.log(`The result: ${fun3(5,5)}`);



// IIFE (Immediately Invoked Function Expression)

(function () {
  console.log("IIFE");
})();

(() => {
  console.log("IIFE with arrow Expression");
})();