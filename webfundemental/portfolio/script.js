const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (event) {
  cursorGlow.style.left = event.clientX + "px";
  cursorGlow.style.top = event.clientY + "px";
});

// const themeButton = document.querySelector("#theme-toggle");
// themeButton.addEventListener("click", function () {
//   document.body.classList.toggle("light-theme");
// });
