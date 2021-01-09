const pt = document.querySelectorAll('span[lang=pt]');
const en = document.querySelectorAll('span[lang=en]');
pt.forEach((element) => element.style.display = 'none')

document.querySelector('span#footer-date').innerText = `2021 - ${new Date().getFullYear()}`