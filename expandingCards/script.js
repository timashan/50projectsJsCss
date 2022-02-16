"use strict";

const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

const reset = function () {
  panels.forEach((p) => p.classList.remove("active"));
};

container.addEventListener("click", function (e) {
  const panel = e.target.closest(".panel");
  if (!panel) return;

  reset();
  panel.classList.add("active");
});
