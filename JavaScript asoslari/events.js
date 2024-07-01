'use strict';
// Inline event handler
// const changeHeading = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'Yangi sarlavha';
// }


// Event handler properties
// const changeHeading = () => {
//     const heading = document.getElementById('heading');
//     heading.textContent = 'Yangi sarlavha';
// }

// const btn = document.getElementById('changeHeadingBtn');
// btn.onclick = changeHeading;


// Event listeners
const changeHeading = () => {
    const heading = document.getElementById('heading');
    heading.textContent = 'Yangi sarlavha';
}

const btn = document.getElementById('changeHeadingBtn');
btn.addEventListener('click', changeHeading);