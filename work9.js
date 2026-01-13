// setTimeOut
let sto = ()=>{
    console.log("After 3 seconds, SetTimeOut will be worked.");
    setTimeout(()=>{
        console.log("SetTimeOut Output after 3 seconds")
    }, 3000);
}


// setTimeInterval -- clearInterval
// will work 4 times as 1 second duration
let sti = () => {
    let count = 0;

    const intervalId = setInterval(() => {
    console.log("Worked");

    count++;

    if (count === 4) {
        clearInterval(intervalId);
        console.log("Stop");
    }
    }, 1000);
}

sto();
sti();