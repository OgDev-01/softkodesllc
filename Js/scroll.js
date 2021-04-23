// const scroller = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
//   multiplier: 0.8,
// });

// if ($("#carousel").visible(true)) {
//   const scroller = new LocomotiveScroll({
//     el: document.querySelector("[data-scroll-container]"),
//     smooth: true,
//     multiplier: 0.3,
//   });
// }

var blocks = document.getElementsByClassName("li");
var container = document.getElementsByClassName("wrapper-inner");
var hs = new HorizontalScroll.default({
  blocks: blocks,
  container: container,
  isAnimated: true,
});

// if ($(".wrapper-inner").is(":visible")) {
//   $("html, body").css({
//     overflow: "hidden",
//     height: "100%",
//   });
// }

// $.fn.isInViewport = function () {
//   var elementTop = $(this).offset().top;
//   var elementBottom = elementTop + $(this).outerHeight();

//   var viewportTop = $(window).scrollTop();
//   var viewportBottom = viewportTop + $(window).height();

//   return elementBottom > viewportTop && elementTop < viewportBottom;
// };
// $(window).on("resize scroll", function () {
//   if ($("#carousel").isInViewport()) {
//     // $("html, body").off("scroll");
//     $("body").css("overflow", "hidden");
//   } else {
//     $("body").css("overflow", "auto");
//   }
// });
