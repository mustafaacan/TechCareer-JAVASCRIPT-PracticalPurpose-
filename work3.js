const str = document.getElementById("string");
const num = document.getElementById("number");
const bool = document.getElementById("boolean");
const nan = document.getElementById("nan");
const nan2 = document.getElementById("nan2");
const inf = document.getElementById("inf");
const esc = document.getElementById("esc");


function updateElement(elem, txt){
    elem.innerText = txt;
}

updateElement(str, `name is a ${typeof "name"}`);
updateElement(num, `5 is a ${typeof 5}`);
updateElement(bool, `true is a ${typeof true}`);
updateElement(nan, `10/apple is a ${typeof 10/"apple"}`);
updateElement(nan2, `Is "a"x"b" NaN ? : ${isNaN("a"*"b")}`);
updateElement(inf, `44/0 is a ${44/0}`);
updateElement(esc, `"\\" is escape char. For instance, \\\``);