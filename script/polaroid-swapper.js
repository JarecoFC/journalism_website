"use strict";

const polaroidPhotos = [
  "resources/polaroids/polaroid-0.png",
  "resources/polaroids/polaroid-10.png",
  "resources/polaroids/polaroid-11.png",
  "resources/polaroids/polaroid-12.png",
  "resources/polaroids/polaroid-13.png",
  "resources/polaroids/polaroid-14.png",
  "resources/polaroids/polaroid-15.png",
  "resources/polaroids/polaroid-16.png",
  "resources/polaroids/polaroid-17.png",
  "resources/polaroids/polaroid-18.png",
  "resources/polaroids/polaroid-1.png",
  "resources/polaroids/polaroid-2.png",
  "resources/polaroids/polaroid-3.png",
  "resources/polaroids/polaroid-4.png",
  "resources/polaroids/polaroid-5.png",
  "resources/polaroids/polaroid-6.png",
  "resources/polaroids/polaroid-7.png",
  "resources/polaroids/polaroid-8.png",
  "resources/polaroids/polaroid-9.png",
];

function randomPolaroid() {
  let target = document.querySelectorAll(".random-polaroid-photos");

  target.forEach((le) => {
    let posOrNeg = Math.random() < 0.5 ? -1 : 1;
    let randomRotation = Math.floor(Math.random() * 8) * posOrNeg;
    le.setAttribute(
      "src",
      polaroidPhotos[Math.floor(Math.random() * polaroidPhotos.length)]
    );
    le.style.transform = `rotate(${randomRotation}deg)`;
  });
}
document.addEventListener("DOMContentLoaded", randomPolaroid);
