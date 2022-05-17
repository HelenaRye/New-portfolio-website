const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1.0,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

setTimeout(() => {
  locoScroll.update();
}, 2000);
