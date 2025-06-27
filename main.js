window.onload = () => {
  // carrousel principal
  let slideIndex = 0;
  const slides = document.querySelector(".slides");
  const totalSlides = document.querySelectorAll(".slide").length;
  setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    slides.style.transform = "translateX(" + -slideIndex * 100 + "%)";
  }, 3500);

  // carrousel sucursales
  let sucIndex = 0;
  const sucSlides = document.querySelector(".slides-suc");
  const totalSuc = document.querySelectorAll(".slide-suc").length;
  setInterval(() => {
    sucIndex = (sucIndex + 1) % totalSuc;
    sucSlides.style.transform = "translateX(" + -sucIndex * 100 + "%)";
  }, 4500);

  // menú hamburguesa
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobileNav");
  const closeBtn = document.getElementById("closeBtn");

  toggle.addEventListener("click", () => {
    mobileNav.style.right = "0";
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.style.right = "-250px";
  });
};
