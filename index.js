const pt = document.querySelectorAll('span[lang=pt]');
const en = document.querySelectorAll('span[lang=en]');
const dropdownContent = document.querySelector('.dropdown-content');

function setLang(lang) {
  const langs = [en, pt];
  const langsObj = { en: en, pt: pt };
  const newHeader = document.querySelector(`#${lang}`).innerHTML;
  const header = document.querySelector('.mainLang');
  header.innerHTML = newHeader;
  langs.forEach((lang) =>
    lang.forEach((element) => (element.style.display = 'none'))
  );
  langsObj[lang].forEach((element) => (element.style.display = 'block'));
}

setLang('en'); // Change it to localStorarge in future

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
