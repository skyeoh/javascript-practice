let errored = false;

const para1 = document.createElement("p");
if(birthYear !== 1948) {
    para1.textContent = `birthYear is incorrect, it's currently: "${birthYear}"`;
    errored = true;
}
section.appendChild(para1);

const para2 = document.createElement("p");
if(thisYear !== 1965) {
    para2.textContent = `thisYear is incorrect, it's currently: "${thisYear}"`;
    errored = true;
}
section.appendChild(para2);

const para3 = document.createElement("p");
if(firstName !== "Carlos") {
    para3.textContent = `firstName is incorrect, it's currently: "${firstName}"`;
    errored = true;
}
section.appendChild(para3);

const para4 = document.createElement("p");
if(lastName !== "Stevenson") {
    para4.textContent = `lastName is incorrect, it's currently: "${lastName}"`;
    errored = true;
}
section.appendChild(para4);

const para5 = document.createElement("p");
if(age !== 17) {
    para5.textContent = `age is incorrect, it's currently: "${age}"`;
    errored = true;
}
section.appendChild(para5);

const para6 = document.createElement("p");
if(fullName !== "Carlos Stevenson") {
    para6.textContent = `fullName is incorrect, it's currently: "${fullName}"`;
    errored = true;
}
section.appendChild(para6);

const para7 = document.createElement("p");
if(greeting !== "Hello! My name is Carlos Stevenson and I am 17 years old.") {
    para7.textContent = `greeting is incorrect, it's currently: "${greeting}"`;
    errored = true;
}
section.appendChild(para7);

const finalTestResult = document.createElement("p");
finalTestResult.style.margin = "1rem 0";
if (!errored) {
    finalTestResult.textContent = "Congrats! Move onto the next lesson!";
    finalTestResult.style.color = "green";
} else {
    finalTestResult.textContent = "Try again";
    finalTestResult.style.color = "red";
}
section.appendChild(finalTestResult);