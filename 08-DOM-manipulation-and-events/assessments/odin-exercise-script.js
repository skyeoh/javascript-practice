console.log('Successful link to odin-exercise-script.js');

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


/***** Part 1 *****/
const para = document.createElement('p');
para.style.color = 'red';
para.textContent = 'Hey I\'m red!';

container.appendChild(para);


/***** Part 2 *****/
const headerLvl3 = document.createElement('h3');
headerLvl3.style.cssText = 'color: blue;';
headerLvl3.textContent = "I'm a blue h3!";

container.appendChild(headerLvl3);


/***** Part 3 *****/
const div = document.createElement('div');
div.setAttribute('style', 'border: solid 1px black; background-color: pink;');

const headerLvl1 = document.createElement('h1');
headerLvl1.textContent = 'I\'m in a div';

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";

div.appendChild(para2);
div.insertBefore(headerLvl1, para2);
container.appendChild(div);
