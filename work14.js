const user = document.getElementById("user");
const all = document.getElementById("all");
const userbtn = document.getElementById("btn1");
const allbtn = document.getElementById("btn2");
const nw = document.getElementById("btn3");
const cl = document.getElementById("btn4");

function locStoreCLEAR() {
  localStorage.clear();
  all.innerText = "";
  user.innerText = "";
}

function locStoreADDUSER() {
  locStoreCLEAR();
  let name = prompt("Enter your name (will be saved on locale storage): ");
  name = name === null || name === "" ? "Username" : name;
  localStorage.setItem("username", name);
  console.log(`${name} has added to locale storage`);

  let allItems = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    allItems[key] = localStorage.getItem(key);
  }

  return allItems;
}

function locStoreADD() {
  let key = prompt("Enter the KEY :");
  key = key === "" ? "EMPTY" : key;

  if (key == null || key == "" || key == "EMPTY") {
    alert(`${key} is not suitable for new locale starage name.`);
  } else {
    let value = prompt("Enter the VALUE :");
    localStorage.setItem(String(key), value);
    alert(`${key} and ${value} has added to Locale Storage`);
  }
  all.innerText = "";
  user.innerText = "";
}

function localStorageREAD(item) {
  let result = localStorage.getItem(item);
  return result ? result : null;
}

function listener(event) {
  if (event.target.id == "btn1") {
    user.innerText = localStorageREAD("username");
  } else {
    let allItems = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      allItems[key] = localStorage.getItem(key);
    }
    all.innerText = JSON.stringify(allItems, null, 2);
  }
}

console.log("All the locale Storage elements: ", locStoreADDUSER());
console.log("The value on the locale Storage: ", localStorageREAD("username"));

userbtn.addEventListener("click", listener);
allbtn.addEventListener("click", listener);
nw.addEventListener("click", locStoreADD);
cl.addEventListener("click", locStoreCLEAR);
