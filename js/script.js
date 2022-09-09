let header = document.querySelector("header");
let nav = document.querySelector(".nav");
let bars = document.querySelector(".fa-bars");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

bars.addEventListener("click", () => {
  bars.classList.toggle("fa-times");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav ul li > a").forEach((anchor) => {
  anchor.addEventListener("click", () => {
    bars.classList.remove("fa-times");
    nav.classList.remove("active");
  });
});
