const a = document.getElementById("a");
const b = document.getElementById("b");
const loose = document.getElementById("loose");
const strict = document.getElementById("strict");
const restart = document.getElementById("restart");
const or = document.getElementById("or");
const and = document.getElementById("and");
const pwr = document.getElementById("pwr");

/*

&& --> And
|| --> or

Attention --> prompt returns STRING value

*/

function operation(){
    function updateVariable(item, txt, val){
        item.innerText = `${txt} ${val}`;
    }

    function compare(v1, v2) {
        const comp1 = v1 == v2;
        const comp2 = v1 === v2;
        return [comp1, comp2];
    }

    let var1 = Number(prompt("Enter NUMBER for the variable A: "));
    updateVariable(a, "Variable A (NUMBER):", var1);

    let var2 = Number(prompt("Enter NUMBER for the variable B: "));
    updateVariable(b, "Variable B (NUMBER):", var2);

    const [res1, res2] = compare(var1, var2);
    updateVariable(loose, "Loose Equality:", res1);
    updateVariable(strict, "Strict Equality:", res2);
    updateVariable(or, "OR Equality:", Boolean(var1)||Boolean(var2));
    updateVariable(and, "AND Equality:", Boolean(var1)&&Boolean(var2));
    updateVariable(pwr, "A over B:", Math.pow(var1, var2));

}

operation();

restart.addEventListener("click",operation);



