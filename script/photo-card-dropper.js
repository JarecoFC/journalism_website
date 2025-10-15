"use strict";
function photoCardDrop() {
  let target = document.querySelectorAll(".photo-card");

  target.forEach((le) => {
    let posOrNeg = Math.random() < 0.5 ? -1 : 1;
    let randomRotation = Math.floor(Math.random() * 6) * posOrNeg;
    le.style.transform = `rotate(${randomRotation}deg)`;
  });
}
document.addEventListener("DOMContentLoaded", photoCardDrop);
