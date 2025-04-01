document.querySelectorAll(".image-wrapper").forEach((wrapper) => {
  const overlay = wrapper.querySelector(".overlay");

  // Mobile support: show overlay on touch
  wrapper.addEventListener("touchstart", () => {
    overlay.style.opacity = "1";
  });

  // Hide when touch ends or is canceled
  wrapper.addEventListener("touchend", () => {
    overlay.style.opacity = "0";
  });

  wrapper.addEventListener("touchcancel", () => {
    overlay.style.opacity = "0";
  });
});
