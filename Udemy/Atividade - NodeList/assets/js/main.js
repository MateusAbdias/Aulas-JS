const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    // Manipulando o CSS pelo JS
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#fff';
}