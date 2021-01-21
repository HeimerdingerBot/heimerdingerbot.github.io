/* Dropdown & Language */

const pt = document.querySelectorAll('span[lang=pt]');
const en = document.querySelectorAll('span[lang=en]');
const dropdownContent = document.querySelector('.dropdown-content');
let width = window.innerWidth;

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
  localStorage.setItem('language', lang);
  language = lang;
  setResponsive(width);
}

let language = localStorage.getItem('language');
language === null ? setLang('en') : setLang(language);

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

/* FOOTER DATE */

document.querySelector(
  'span#footer-date'
).innerText = `2021 - ${new Date().getFullYear()}`;

/* SERVICE WORKER */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js');
  });
};

/* JS "CSS" gambiarra kkj */

function setResponsive(actualWidth) {
  const elementsPt = document.querySelectorAll('.responsive[lang=pt]');
  const elementsEn = document.querySelectorAll('.responsive[lang=en]');
  const langsObj = { en: elementsEn, pt: elementsPt };
  if (actualWidth < 700) {
    langsObj[language].forEach((el) => el.style.display = 'none');
  } else {
    langsObj[language].forEach((el) => el.style.display = 'inline');
  }
}

setResponsive(width);
window.addEventListener("resize", (e) => {
  width = window.innerWidth;
  setResponsive(width);
  console.log('fon');
})
