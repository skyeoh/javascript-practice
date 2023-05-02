console.log("script.js loaded successfully.");

/***** Function declaration *****/
const textBox1 = document.querySelector("input#func-declaration");
const para1 = document.querySelector("p.func-declaration");

textBox1.addEventListener('keydown', logKey);

function logKey(event) {
    para1.textContent = `You pressed "${event.key}".`;
}