"use strict";
function newsPaperDrop() {
  let target = document.querySelectorAll(".maligno-load-image");

  target.forEach((le) => {
    let posOrNeg = Math.random() < 0.5 ? -1 : 1;
    let randomRotation = Math.floor(Math.random() * 4) * posOrNeg;
    le.classList.add("active");
    le.style.transform = `rotate(${randomRotation}deg)`;
  });
}
document.addEventListener("DOMContentLoaded", newsPaperDrop);
