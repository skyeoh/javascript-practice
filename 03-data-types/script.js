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