// from EC5
"use strict";

// let, const, arrow functions

let data1 = () => {
  console.log("arrow functions");
};

data1();

// TEMPLATE LITERALS (``)

const a = 1;
const b = 2;

console.log(`Template Literal Example ${a} and ${b}`);

// ARRAY DESTRUCTING

const arr = [1, 2, 3, 4];

const [one, two, three, four] = arr;

console.log(one);
console.log(two);

// OBJECT DESTRUCTING

const obj = {
  name: "mustafa",
  surname: "can",
};

let { name, surname } = obj;

console.log(name);
console.log(surname);

// REST
// NECESSARY ONLY IF WE DONT KNOW HOW MANY ARGUMENTS WILL THERE

function arr2(...temp) {
  return temp.reduce((total, item) => {
    return total + item;
  }, 0);
}

console.log("The sum of :", arr2(1, 2, 3, 4, 5, 6, 7));

// SPREAD OPERATOR

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
let arr5 = [...arr3, ...arr4];
console.log(arr5);

// CLASS

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  // function (no function keyword)
  greetings() {
    console.log(`Hello ${this.name} ${this.surname}`);
  }
}

const person1 = new Person("mustafa", "can");
person1.greetings();

// IMPORT EXPORT OPERATIONS
// DO NOT FORGOT ADDING TYPE=MODULE TO HTML FILE
import { divide } from "./work16_1.js";

const d = divide(5, 2);
console.log(d);
