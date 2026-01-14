// CALLBACK FUNCTION

let name;

const callBackFunc = (name) => {
    console.log(`Hello ${name}, welcome from CALLBACK FUNCTION`);
}

function welcoming (greeting){
    name = prompt("Please enter your name: ");
    name = name ? name : "USER";
    greeting(name);
}

welcoming(callBackFunc);


// Asynchrone functions -- Promise

function promiseFunc(){
    console.log("Promise function working...")
    const myPromise = new Promise((resolve,reject)=>{
        let number = Math.floor(Math.random()*6);
        if (number%2==0){
            resolve(number);
            console.log("Even number");
        }else{
            reject(number);
            console.log("odd number");
        }
    }
    ).then((result)=>{console.log(result)})
    .catch((err)=>{console.error(err)});
}

promiseFunc();

// Critical points: awaits can be useful if you need to obtain the result
// to avoid interruption
// for instance, without api response, we cannot move forward

const asynAwaitFunction = ()=>{
    console.log("asynAwaitFunction")
    async function myPromise() {
        try{
            let response = await fetch('');
            let result = response.json();
            console.log(result);
        }
        catch (error){
            console.log(error);
        }

    }
}

asynAwaitFunction();





// BONUS : PROMİSE ALL STRUCTURE

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: name });
    }, 1000);
  });
}

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Order 1", "Order 2"]);
    }, 1500);
  });
}

function getNotifications() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["Notify 1", "Notify  2"]);
    }, 500);
  });
}


async function loadDashboard() {

console.log("Dashboard Loading...");

  try {
    const [user, orders, notifications] = await Promise.all([
      getUser(),
      getOrders(),
      getNotifications()
    ]);

    console.log(user);
    console.log(orders);
    console.log(notifications);

  } catch (error) {
    console.error(error);
  }
}

loadDashboard();