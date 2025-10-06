"use strict";

const polaroidPhotos = [
  "resources/polaroids/1759326504224-rs.png",
  "resources/polaroids/1759326531818-rs.png",
  "resources/polaroids/1759326555468-rs.png",
  "resources/polaroids/1759326582816-rs.png",
  "resources/polaroids/1759326607108-rs.png",
  "resources/polaroids/1759326632788-rs.png",
  "resources/polaroids/1759326657066-rs.png",
  "resources/polaroids/1759326712720-rs.png",
  "resources/polaroids/1759326734891-rs.png",
  "resources/polaroids/1759727392503-rs.png",
  "resources/polaroids/1759727428981-rs.png",
  "resources/polaroids/1759727454077-rs.png",
  "resources/polaroids/1759727487270-rs.png",
  "resources/polaroids/1759727504932-rs.png",
  "resources/polaroids/1759727529022-rs.png",
  "resources/polaroids/1759727544820-rs.png",
  "resources/polaroids/1759326504224-rs.png",
  "resources/polaroids/1759326531818-rs.png",
  "resources/polaroids/1759326555468-rs.png",
  "resources/polaroids/1759326582816-rs.png",
  "resources/polaroids/1759326607108-rs.png",
  "resources/polaroids/1759326632788-rs.png",
  "resources/polaroids/1759326657066-rs.png",
  "resources/polaroids/1759326712720-rs.png",
  "resources/polaroids/1759326734891-rs.png",
  "resources/polaroids/1759727392503-rs.png",
  "resources/polaroids/1759727428981-rs.png",
  "resources/polaroids/1759727454077-rs.png",
  "resources/polaroids/1759727487270-rs.png",
  "resources/polaroids/1759727504932-rs.png",
  "resources/polaroids/1759727529022-rs.png",
  "resources/polaroids/1759727544820-rs.png",
  
  "resources/polaroids/1759727847881-rs.png",
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
