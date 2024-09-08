const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;
const section = document.getElementById('skills-section') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (section.style.display === 'none') {
    section.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    section.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});

