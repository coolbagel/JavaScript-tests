const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//red p content

const RedText = document.createElement('p');
RedText.classList.add('red');
RedText.textContent = 'Hey I\'m red!';
RedText.style.color='red';
container.appendChild(RedText);

//blue h3

const BlueH3 = document.createElement('h3');
BlueH3.classList.add('blueH3');
BlueH3.textContent = 'Hey I\'m a blue H3!';
BlueH3.style.color='blue';
container.appendChild(BlueH3);

//div with black border and stuff inside

const newdiv = document.createElement('div');
newdiv.classList.add('DivWithBorderAndContent');
newdiv.style.cssText = "border: 1px solid; background-color: pink;";
container.appendChild(newdiv);

//stuff indisde the div above

const parentDiv = document.querySelector('.DivWithBorderAndContent'); //parent div
//paragraph
const newDivContent = document.createElement('p');
newDivContent.classList.add('newDivP');
newDivContent.textContent = 'I\'m a paragraph in a div!';

parentDiv.appendChild(newDivContent);
//h1
const newDivH1 = document.createElement('h1');
newDivH1.classList.add('newDivh1');
newDivH1.textContent = 'I\'m an h1 in a div!';

parentDiv.appendChild(newDivH1);