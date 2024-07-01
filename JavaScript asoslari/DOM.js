'use strict';
// const heading1 = document.getElementById('sarlavha');
// console.log(heading1);
// heading1.remove();

// const inputEls = document.getElementsByName('username');
// const inputEl = inputEls[0];
// console.log(inputEl);

// const headings = document.getElementsByClassName('sarlavha1');
// console.log(headings);
// headings[1].remove();

// const headings = document.getElementsByTagName('h1');
// console.log(headings);

// const heading1 = document.querySelector('#sarlavha');
// console.log(heading1);

// const headings = document.querySelectorAll('h1');
// console.log(headings);
// headings[0].remove();

// const heading = document.getElementById('sarlavha');
// // heading.textContent = 'Yangi matn';

// const inputEl = document.getElementById('username');
// inputEl.value = 25

// heading.innerHTML = '<h1>Hello</h1>';

// const paragraph = document.createElement('p');
// console.log(paragraph);

// const text = document.createTextNode('Bu yerda xatboshi yozilgan');
// console.log(text);

const paragraph = document.createElement('p');
const text = document.createTextNode('Bu yerda xatboshi yozilgan');

paragraph.appendChild(text);
console.log(paragraph);

const box = document.getElementById('box');
box.appendChild(paragraph);

console.log(box.parentElement);
console.log(box.children);