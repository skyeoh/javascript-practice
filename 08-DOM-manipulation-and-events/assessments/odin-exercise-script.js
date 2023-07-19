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
