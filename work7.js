// Ternary (short IF-ELSE)

let chooce = (3>5) ? 3:5;
console.log(`The result of which one is bigger, 3 or 5  is : ${chooce}`);

// FOR Loop

for(let i=0; i<5; i++){
    console.log(`The current number is: ${i}`);
}

// Alternative Method --> Recursive Function
// Note: "Base Case" (limitor) is needed. Otherwise, there could be infinite loop

function recursive(item){
    if (item < 5){
        console.log("The current number is: (from Recursive Function)", item);
        recursive(item+1);
    } else{}
}

recursive(0);


// SWITCH CASE 
// add and even finder

let number = 1;

switch(number){
    case number%2==0:
        console.log(`${number} is even`);
    default:
        console.log(`${number} is odd`);
        
}


//DO - WHILE LOOP
let i = 0;
do{
    console.log(`item in DO-WHILE is: `,i);
    i++;
}while(i<=5);
