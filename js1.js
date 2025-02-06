/**
Autor: Ana Camila Nambo Delhumeau 
Programa: index.html 
Fecha: 05/02/2025 
Lenguaje: html 
**/
let index = 0;
const images = document.querySelector('.carousel-images');

function nextImage() {
  index = (index + 1) % 15; 
  images.style.transform = `translateX(-${index * 100}%)`; 
}

setInterval(nextImage, 30000);