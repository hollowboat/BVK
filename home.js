/* =========================
FILE: home.js
========================= */

const slideshow = document.getElementById("slideshow");

const images = [

  "Assets/Images/image1.png",
  "Assets/Images/image2.png",
  "Assets/Images/image3.png",
  "Assets/Images/image4.png",
  "Assets/Images/image5.png",
  "Assets/Images/image6.png",
  "Assets/Images/image7.png",
  "Assets/Images/image8.png",
  "Assets/Images/image9.png",
  "Assets/Images/image10.png"

];

let current = 0;

setInterval(() => {

  slideshow.style.opacity = 0;

  setTimeout(() => {

    current = (current + 1) % images.length;

    slideshow.src = images[current];

    slideshow.style.opacity = 1;

  }, 400);

}, 3000);