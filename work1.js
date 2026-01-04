/* This is a comment line 
for online editor, please use the links below
1) ** Codepen --> https://codepen.io/
2) JSFiddle --> https://jsfiddle.net/
3) replit --> https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwidkpXz1PKRAxXg8XkEHaCSFDwYACICCAEQARoCd2Y&co=1&ase=2&gclid=Cj0KCQiAvOjKBhC9ARIsAFvz5lhZ9-CMkUwN7hGL4AZsSPYY4ydM8kljduoVAwBFwqkGyCDtUpplhncaAvOfEALw_wcB&cid=CAASuwHkaHllRv7U9UdQ8y0lu3uYLE6m0nPUt4dSfPMav5N89MCx7F7bhOQtJhOz7jBUSAKb4k1dVSkS925nUFoHmrY7r1J7ADaBZY5WQHXFJaa01XmXZ92kyZE93KlDmW5xkjHDVSinDl8Z-8vNh9HWE52qiwzn1npnSQ40UQNq4Z5E4HhM5qokntgM3UXC4t-2tPoxYype1f--tIQrsVH8kjmCTyThpX90DJj9f1WgqDxRYDFr45nvvFKbHoBk&cce=2&category=acrcp_v1_32&sig=AOD64_2cYe7tTKwmiLHcUKjKHNKwvng4SA&q&nis=4&adurl=https://replit.com?pid%3Dgoogle_search%26c%3D%7B%7Bcampaign%7D%7D%26af_c_id%3D%7B23389489402%7D%26af_adset%3D%7B%7Badgroup%7D%7D%26af_adset_id%3D%7B196179363011%7D%26af_ad%3D%7B789247329796%7D%26af_ad_id%3D%7B%7Badid%7D%7D%26utm_source%3Dgoogle%26utm_medium%3Dsearch%26utm_campaign%3D%7B%7Bcampaign%7D%7D%26gad_source%3D1%26gad_campaignid%3D23389489402%26gbraid%3D0AAAAA-k_HqKclQ5xDsdZyy6e840Fv7n5E%26gclid%3DCj0KCQiAvOjKBhC9ARIsAFvz5lhZ9-CMkUwN7hGL4AZsSPYY4ydM8kljduoVAwBFwqkGyCDtUpplhncaAvOfEALw_wcB&ved=2ahUKEwj38o7z1PKRAxW2R_EDHfwOM7AQ0Qx6BAgWEAE
4) HTMLHous --> https://html.haus/tools.html
You can also use Google Chrome */

console.log("Hello World !!! please check the comment above");

const loc = window.location;

console.log(`Current location : ${loc}`);

//const win = window.open("https://www.google.com", "_blank");

alert("window has opened !, Please check the console logs");


// Window width and height

const w = window.innerWidth;
const h = window.innerHeight;

alert(`current screen sizes: ${w} x ${h}`)


// Counter Game

const btnCounter = document.getElementById("btn1");
const btnReset = document.getElementById("btn2");
const score = document.getElementById("score");
let count = 0 ;

function counter(){
    count++;
    score.innerText = `Current Counter: ${count}`;
    console.info("Counter has increased")
}

function reset(){
    count=0;
    score.innerText = `Current Counter: ${count}`;
    console.warn("Counter has reset");
    
}

btnCounter.addEventListener("click",counter);
btnReset.addEventListener("click",reset);
