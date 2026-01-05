const tstr = document.getElementById("tstr");
const parse = document.getElementById("parse");
const fix = document.getElementById("fix");


function updateElement(elem, txt){
    elem.innerText = txt;
}


updateElement(tstr, `The result of 1251.toString(16) is ${(1251).toString(16)} and type is ${typeof (1251).toString(16)}`);
updateElement(parse, `The parseInt("123.5") and parseFloat("123.5") are : ${parseInt("123.5")}, ${parseFloat("123.5")} and their type ${typeof parseInt("123.5")}`);
updateElement(fix, `123,4556.toFixed(2) result is: ${123.4556.toFixed(2)}`);