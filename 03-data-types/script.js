console.log("Script is working!");

const sgl = 'Single quotes';
const dbl = "Double quotes";
document.getElementById("sgl").innerHTML = sgl;
document.getElementById("dbl").innerHTML = dbl;

const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
document.getElementById("sglDbl").innerHTML = sglDbl;
document.getElementById("dblSgl").innerHTML = dblSgl;

const sglSgl = 'Hello \'world\'!';
const dblDbl = "Hello \"world\"!";
document.getElementById("sglSgl").innerHTML = 'Hello \\\'world\\\'!\' = \'' + sglSgl;
document.getElementById("dblDbl").innerHTML = "Hello \\\"world\\\"!\" = \"" + dblDbl;

const name = "Michael";
const greeting = `Hello, ${name}`;
document.getElementById("temp-lit").innerHTML = greeting;

const greeting2 = "Hello";
const name2 = "Anthony";
const message = greeting2 + ", " + name2;
const message2 = `${greeting2}, ${name2}`;
document.getElementById("concat-plus").innerHTML = message;
document.getElementById("concat-temp-lit").innerHTML = message2;

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
    (score / highestScore) * 100
}%.`;
document.getElementById("expr-in-strings").innerHTML = output;

const multilineString1 = `I like the song.
I gave it a score of 90%.`;
console.log("multilineString1 = " + multilineString1);
const multilineString2 = "I like the song.\nI gave it a score of 90%.";
console.log("multilineString2 = " + multilineString2);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log("text.length = " + text.length);

text = "Apple, Banana, Kiwi";
console.log("text.slice(7, 13) = " + text.slice(7, 13));
console.log("text.slice(7) = " + text.slice(7));
console.log("text.slice(-12) = " + text.slice(-12));
console.log("text.slice(-12, -6) = " + text.slice(-12, -6));
console.log("text.substring(7, 13) = " + text.substring(7, 13));
console.log("text.substring(-12) = " + text.substring(-12));
console.log("text.substr(7, 6) = " + text.substr(7, 6));
console.log("text.substr(-4) = " + text.substr(-4));

text = "Please visit Microsoft at the Microsoft Campus!";
let newText = text.replace("Microsoft", "Google");
console.log(newText);
let newText2 = text.replace("MICROSOFT", "Google");
console.log(newText2);
let newText3 = text.replace(/MICROSOFT/i, "Google");
console.log(newText3);
let newText4 = text.replace(/Microsoft/g, "Google");
console.log(newText4);
let newText5 = text.replaceAll("Microsoft", "Google");
console.log(newText5);
let newText6 = text.replaceAll(/Microsoft/g, "Google");
console.log(newText6);

text = "Hello World!";
console.log("text.toUpperCase() = " + text.toUpperCase());
console.log("text.toLowerCase() = " + text.toLowerCase());
console.log("original text = " + text);