console.log("script.js loaded successfully.");

/***** Function declaration *****/
const textBox1 = document.querySelector("input#func-declaration");
const para1 = document.querySelector("p.func-declaration");

textBox1.addEventListener('keydown', logKey);

function logKey(event) {
    para1.textContent = `You pressed "${event.key}".`;
}

/***** Function expression/anonymous function *****/
const textBox2 = document.querySelector("input#func-expression");
const para2 = document.querySelector("p.func-expression");

textBox2.addEventListener('keydown', function(event) {
    para2.textContent = `You pressed "${event.key}".`;
});