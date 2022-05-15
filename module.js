const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    nav.classList.toggle("nav-active");
  });
};

navSlide();
