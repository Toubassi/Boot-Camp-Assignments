const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (event) {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});
