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

/***** Arrow function expression *****/
const textBox3 = document.querySelector("input#arrow-func");
const para3 = document.querySelector("p.arrow-func");

textBox3.addEventListener('keydown', (event) => {
    para3.textContent = `You pressed "${event.key}".`;
});

/***** Parameters and arguments *****/
const sectionParametersArguments = document.querySelector("section.parameters-arguments");

function showMessage(from, text = "no text given") {
    sectionParametersArguments.appendChild(document.createElement("p")).textContent = from + " : " + text;
}

showMessage();
showMessage("Ann");
showMessage(undefined, undefined);
showMessage("Ann", "Hello world!");