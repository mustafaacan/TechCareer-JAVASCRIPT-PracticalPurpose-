// 1) strict mode --> all definition will be required a strict
// definetion such let, const, function...

"use strict";

function myData() {
  // there will a error on console without let
  let x = 5;
  console.log(x);
}

myData();

// 2) Object Methods

function myData2() {
  let person = { k1: "v1", k2: "v2" };
  person["name"] = "Mustafa";
  const k = Object.keys(person);
  console.log("Keys from myData2", k);
}

myData2();

// ForEach

function arrayData() {
  const dt1 = [1, 2, 3, 4, 5, 6];
  return dt1;
}

console.log(arrayData());

const dt2 = arrayData();
dt2.forEach(function (item) {
  console.log(item);
});

// MAP

let dt3 = dt2.map(function (item) {
  return item ** 2;
});

console.log(dt3);

// MAP-FILTER-FOREACH

dt2
  .map(function (item) {
    return item ** 2;
  })
  .filter((item) => {
    return item > 5;
  })
  .forEach((item) => {
    console.log(item);
  });

// REDUCE

console.log(
  "Summary",
  dt2.reduce((acc, item) => {
    return acc + item;
  }, 0),
);

// JSON

function myData3() {
  return {
    name: "Mustafa",
    surname: "Can",
    role: "Engineer",
  };
}

let dt4 = JSON.stringify(myData3());
console.log(dt4, typeof dt4);

let dt5 = JSON.parse(dt4);
console.log(dt5.name);
console.log(dt5.surname);
