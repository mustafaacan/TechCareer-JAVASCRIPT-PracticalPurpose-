class Person {
  // similar to python __init__() function
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  // functions should be defined directly
  greeting() {
    console.log(`Welcome ${[this.name, this.surname].join(" ")}`);
  }
}

function getInfo(message, def = "NoName") {
  let item = prompt(message, def);
  item ? item : def;
  return item;
}

let n = getInfo("Please enter your name : ");
let s = getInfo("Please enter your surname : ", (def = "NoSurname"));

let person = new Person(n, s);
person.greeting();
