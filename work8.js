
try{
    // naming error --> alerc has used instead of alert. Exception "not defined" error.
    alerc("Error Pop-up");

}catch(err){

    console.error("First try-catch method: ", err.message);

    //throw new Error("Throw Error");

}finally{

    console.log("First try-catch method has ended");

}


// Debug for 

let arr = 0;

for (let i = 10; i <= 30; i+=10) {
    arr = arr + i; // Breakpoint to start of line
    console.log(arr); 
}