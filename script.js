const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.0,
  reloadOnContextChange: true,
  touchMultiplier: 2,
  smoothMobile: 0,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

setTimeout(() => {
  scroll.update();
}, 2000);

// Scroll update all pages

document.addEventListener("DOMContentLoaded", function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      scroll.update();
    }, 500);
  }

  ScrollUpdateDelay();
});
