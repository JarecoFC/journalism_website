"use strict";

const polaroidPhotos = [
  "resources/polaroids/polaroid_0-rs.png",
"resources/polaroids/polaroid_1-rs.png",
"resources/polaroids/polaroid_2-rs.png",
"resources/polaroids/polaroid_3-rs.png",
"resources/polaroids/polaroid_4-rs.png",
"resources/polaroids/polaroid_5-rs.png",
"resources/polaroids/polaroid_6-rs.png",
"resources/polaroids/polaroid_7-rs.png",
"resources/polaroids/polaroid_8-rs.png",
"resources/polaroids/polaroid_9-rs.png",
"resources/polaroids/polaroid_10-rs.png",
"resources/polaroids/polaroid_11-rs.png",
"resources/polaroids/polaroid_12-rs.png",
"resources/polaroids/polaroid_13-rs.png",
"resources/polaroids/polaroid_14-rs.png",
"resources/polaroids/polaroid_15-rs.png",
"resources/polaroids/polaroid_16-rs.png",
"resources/polaroids/polaroid_17-rs.png",
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
