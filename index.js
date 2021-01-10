const pt = document.querySelectorAll('span[lang=pt]');
const en = document.querySelectorAll('span[lang=en]');
const dropdownContent = document.querySelector('.dropdown-content');

pt.forEach((element) => (element.style.display = 'none'));

document.querySelector(
  'span#footer-date'
).innerText = `2021 - ${new Date().getFullYear()}`;

document.querySelector('body').addEventListener('close', function () {
  return dropdownContent.classList.remove('active');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.mainLang')) {
    dropdownContent.classList.remove('active');
  }
});

document.querySelector('.mainLang').addEventListener('click', function () {
  dropdownContent.classList.toggle('active');
});
