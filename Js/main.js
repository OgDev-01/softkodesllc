$(document).ready(function () {
  $(this).scrollTop(0);
  let menuClicked = false;
  let iconOne = document.getElementById("icon-1");
  // let iconTwo = document.getElementById("icon-2");
  let iconThree = document.getElementById("icon-3");
  const listItems = document.getElementById("list-items");
  // const burger = document.getElementById("burger");
  // const body = document.querySelector("body");

  $("#burger").on("click", () => {
    if (!menuClicked) {
      listItems.classList.add("open");
      $(".nav-list").addClass("li-visible");
      iconOne.classList.add("rotate-1");
      // iconTwo.classList.add("second");
      iconThree.classList.add("rotate-2");
      $("body").css("overflow", "hidden");
      menuClicked = true;
      // var script = $("script").each().attr("src");
      console.log(script);
    } else {
      listItems.classList.remove("open");
      $(".nav-item").removeClass("li-visible");
      iconOne.classList.remove("rotate-1");
      // iconTwo.classList.remove("second");
      iconThree.classList.remove("rotate-2");
      $("body").css("overflow", "auto");
      menuClicked = false;
    }
  });

  // Locomotive scroll error handler
  function scrollHandler() {
    if (this.src === "Js/locomotive.js") {
      $(this).attr("src", "");
    }
  }

  $(document).mousemove(function (e) {
    // values: e.clientX, e.clientY, e.pageX, e.pageY
    $(".cursor-custom").css({
      left: e.clientX,
      top: e.clientY,
    });
  });

  $("a").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });
  $("a").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });
  $(".budget-btn-wrap li").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".budget-btn-wrap li").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  $(".burger-menu").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".burger-menu").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  $(".nav-icon").mouseover(function () {
    $(".cursor-custom").addClass("hovered");
  });

  $(".nav-icon").mouseleave(function () {
    $(".cursor-custom").removeClass("hovered");
  });

  // Animate move Handler
  const link = document.querySelectorAll(".nav-item");
  // const cursor = document.querySelector(".cursor");
  let aniImages = document.querySelectorAll(".section-wrap");
  // console.log(aniImages);
  const animateit = function (e) {
    const span = this.querySelector(".refresh");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 15,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    // span.style.transition = ".2s ease all";

    if (e.type === "mouseleave") span.style.transform = "";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseleave", animateit));

  // var loaded = false;

  // Animate image move
  // const imageAnimation = function (e) {
  //   const angle = this.querySelector(".img-move");
  //   console.log(angle);
  //   const { offsetX: x, offsetY: y } = e,
  //     { offsetWidth: width, offsetHeight: height } = this,
  //     move = 30,
  //     xMove = (x / width) * (move * 2) - move,
  //     yMove = (y / height) * (move * 2) - move;

  //   angle.style.transform = `translate(${xMove}px, ${yMove}px)`;
  //   angle.style.transition = "1.5s ease all";

  //   if (e.type === "mouseleave") angle.style.transform = "";
  // };
  // aniImages.forEach((b) => b.addEventListener("mousemove", imageAnimation));
  // aniImages.forEach((b) => b.addEventListener("mouseleave", imageAnimation));
  // Active class handler
  let path = window.location.href;
  $(".refresh").each(function () {
    if (this.href === path) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  $(".budget").each(() => {
    $(".budget").click(function () {
      $(".budget").removeClass("selected");
      $(this).addClass("selected");

      // elementClicked = true;
    });
  });
  // });

  // Project link handler
  $(".p-link-items").each(() => {
    $(".p-link-items").click(function () {
      var innerHtml = $(this).text();
      $(".p-link-items").removeClass("s-link");
      $(this).addClass("s-link");
      $(".filter-btn")
        .text(innerHtml)
        .append(`<i class="fas fa-arrow-down"></i>`);
      $(".project-link").removeClass("clicked");
    });
  });

  $("#web-select").each((e) => {
    $(".head-list").click(function (e) {
      // e.preventDefault();
      $(this).find(".select-list").toggleClass("revealed");
      var currentElement = $(this).find(".select-list");
      var currentIcon = $(this)
        .find(".abc")
        .find(".openings")
        .find(".icon-right");
      if (currentElement.hasClass("revealed")) {
        setTimeout(() => {
          currentIcon.removeClass("fa-chevron-right");
          currentIcon.addClass("fa-chevron-down");
        }, 100);
      } else {
        setTimeout(() => {
          currentIcon.addClass("fa-chevron-right");
          currentIcon.removeClass("fa-chevron-down");
        }, 500);
      }
    });
  });

  // Project links navigation

  $(".filter-btn").click(() => {
    $(".project-link").toggleClass("clicked");
  });
});
