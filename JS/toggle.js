'use strcit';

const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const body = document.querySelector('body');

document.addEventListener('click', function (e) {
  if (!e.target.closest('.light-drak-toggle')) return;

  body.classList.toggle('dark-mode-active');

  darkMode.classList.toggle('active-toggle');
  darkMode.classList.toggle('hidden-toggle');

  lightMode.classList.toggle('active-toggle');
  lightMode.classList.toggle('hidden-toggle');
});
