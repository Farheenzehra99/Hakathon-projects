"use strict";
const toggleButton = document.getElementById('toggle-button');
const section = document.getElementById('skills-section');
toggleButton.addEventListener('click', () => {
    if (section.style.display === 'none') {
        section.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        section.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
