let text = document.querySelector('.start-here');
text.innerText = 'main title'


let newSubTitleUl = document.querySelector('ul ul')
let ul = document.createElement('li');
ul.innerText ='sub title 4';
newSubTitleUl.appendChild(ul);


const removeLi = document.querySelectorAll('ul li');
removeLi[removeLi.length -1].remove();

const changePageTitle = document.querySelector('title');
changePageTitle.textContent = 'master of the dom';

const changeP = document.querySelector('p');
changeP.innerText = 'her we go again'