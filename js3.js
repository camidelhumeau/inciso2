/**
Autor: Ana Camila Nambo Delhumeau 
Programa: index.html 
Fecha: 05/02/2025 
Lenguaje: html 
**/
let index = 0;
const images = document.querySelector('.carousel-images');
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    index = (index + 1) % 15; 
  } else if (e.key === 'ArrowLeft') {
    index = (index - 1 + 15) % 15; 
  }
  images.style.transform = `translateX(-${index * 100}%)`;
});
