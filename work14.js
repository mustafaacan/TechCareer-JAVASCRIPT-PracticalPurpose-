let userbtn = document.getElementById("btn1");
let allbtn = document.getElementById("btn2");
let user = document.getElementById("user");
let all = document.getElementById("all");

function locStoreADD() {
  let name = prompt("Enter your name (will be saved on locale storage): ");
  name ? name : "Username";
  localStorage.setItem("username", name);
  console.log(`${name} has added to locale storage`);

  let allItems = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    allItems[key] = localStorage.getItem(key);
  }

  return allItems;
}

function localStorageREAD(item) {
  let result = localStorage.getItem(item);
  return result ? result : None;
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
    console.log(allItems);
  }
}

console.log("All the locale Storage elements: ", locStoreADD());
console.log("The value on the locale Storage: ", localStorageREAD("username"));

userbtn.addEventListener("click", listener);
allbtn.addEventListener("click", listener);
