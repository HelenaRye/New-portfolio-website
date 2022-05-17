const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

imagesLoaded(scrollContainer, { background: true }, function () {
  scroll.update();
});
