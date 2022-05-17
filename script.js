const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});
