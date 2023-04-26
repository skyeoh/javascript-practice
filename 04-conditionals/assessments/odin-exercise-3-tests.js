const section = document.querySelector("section");
let passed = 0;

const para1 = document.createElement("p");
if(a === 9) {
	para1.textContent = "'a' is correct!";
    passed++;
} else {
	para1.textContent = `'a' is incorrect, got ${a}, expected 9`;
}
section.appendChild(para1);

const para2 = document.createElement("p");
if(b === 66) {
	para2.textContent = "'b' is correct!";
    passed++;
} else {
	para2.textContent = `'b' is incorrect, got ${b}, expected 66`;
}
section.appendChild(para2);

const para3 = document.createElement("p");
if(c === 1) {
	para3.textContent = "'c' is correct!";
    passed++;
} else {
	para3.textContent = `'c' is incorrect, got ${c}, expected 1`;
}
section.appendChild(para3);

const para4 = document.createElement("p");
if(d === -8) {
	para4.textContent = "'d' is correct!";
    passed++;
} else {
	para4.textContent = `'d' is incorrect, got ${d}, expected -8`;
}
section.appendChild(para4);

const para5 = document.createElement("p");
if(e === 68) {
	para5.textContent = "'e' is correct!";
	passed++;
} else {
	para5.textContent = `'e' is incorrect, got ${e}, expected 68`;
}
section.appendChild(para5);

const para6 = document.createElement("p");
para6.style.margin = "1rem 0";
if (passed === 5) {
    para6.textContent = "Congrats! You've solved them all, you may move onto the next lesson";
    para6.style.color = "green";
} else {
    para6.textContent = `${passed} tests passed. ${5 - passed} failed. Please try again.`;
    para6.style.color = "red";
}
section.appendChild(para6);