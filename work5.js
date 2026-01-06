let vocab = ' Html5, CSS, javascript, Jquery ';

console.log(`The sentence is: ${vocab} `);

console.log(`The lenght of the vocab is ${vocab.length}`);

console.log(`After trim function, the length is: ${vocab.trim().length}`);

console.log(`the UpperCase function: ${vocab.toUpperCase()}`);

console.log(`the LowerCase function: ${vocab.toLowerCase()}`);

console.log(`the sentence starts with Html? : ${vocab.startsWith(" Html")}`);

console.log(`the sentence starts with CSS? : ${vocab.startsWith("CSS")}`);

console.log(`the sentence ends with Jquery? : ${vocab.endsWith("Jquery ")}`);

console.log(`The concat with END: ${vocab.concat("END")}`);

vocab = vocab.replace("Jquery", "Python");
console.log(`replace the Jquery with Python: ${vocab}`);

console.log(`remove first 4 chars (HTML): ${vocab.trim().substring(4)}`);

console.log(`Show between first 4 chars and 11 chars: ${vocab.trim().substring(4, 11)}`);

vocab = vocab.concat("Html5");
console.log(`The Html5 added sentence is: ${vocab} `);

console.log(`The first index of Html5: ${vocab.indexOf("Html5")}`);

console.log(`The last index of Html5: ${vocab.lastIndexOf("Html5")}`);
