$(document).ready(function () {
  $(this).scrollTop(0);
  function progress() {
    // $(window).css("scroll-behaviour", "none");
    const startIt = () => {
      setTimeout(function () {
        confetti.speed = -2;
        confetti.start();
      }, 0);
    };

    const stopIt = () => {
      confetti.stop();
    };

    var percent = document.querySelector(".percent");
    var progress = document.querySelector(".progress");
    // var text = document.querySelector(".text");
    var count = 4;
    var per = 4;
    $(".right").addClass(
      "animate__flash animate__delay-2s animate__repeat-2 animate__slow"
    );
    $(".experience").show().addClass("animate__fadeInDown animate__slow");
    $(".wait").show().addClass("animate__fadeInDown animate__slow");
    $(".progress").show().addClass("animate__fadeInUp animate__slow");
    $(".percent").show();
    var loading = setInterval(animate, 50);
    function animate() {
      if (count == 100 && per == 100) {
        percent.classList.add("text-blink");
        // text.style.display = "block";
        setTimeout(() => {
          $(".loading").addClass("finished");
          $("body").css("overflow", "auto");
        }, 1000);
        setTimeout(() => {
          $("#landed").css("opacity", "1");
          $(".products").addClass("animate__fadeInUp");
          $("#lorems").addClass("animate__fadeInUp");
          $(".socks").addClass("animate__fadeIn");
          $("#adds").addClass("animate__fadeInUp");
          stopIt();
        }, 2000);

        clearInterval(loading);
      } else {
        per = per + 1;
        count = count + 1;
        progress.style.width = per + "%";
        percent.textContent = count + "%";
        $("body").css("overflow", "hidden");
        startIt();
      }
    }
  }

  progress();

  var ball = document.createElement("img");
  let imageSrc = [
    "../images/brand.png",
    "../images/logo.png",
    "../images/contact.jpg",
    "../images/badass-8.png",
    "../images/deeds-two.jpg",
    "../images/mobile-news.png",
  ];

  // var ball = document.querySelector(".ball");
  ball.src = "../images/brand.png";

  ball.style.position = "absolute";
  ball.style.left = "0";
  ball.style.top = "0";
  ball.style.width = "80px";

  // document.body.appendChild(ball);

  var speed = 1;
  var xDirection = 1;
  var yDirection = 1;

  var xBoundary = window.innerWidth;
  var yBoundary = window.innerHeight;
  var xPos = ball.offsetLeft;
  var yPos = ball.offsetTop;

  function screensaver() {
    if (xPos + ball.offsetWidth > xBoundary || xPos < 0) {
      xDirection *= -1;
    }

    if (yPos + ball.offsetHeight > yBoundary || yPos < 0) {
      yDirection *= -1;
    }

    ball.style.left = ball.x + speed * xDirection + "px";
    ball.style.top = ball.y + speed * yDirection + "px";

    setTimeout(screensaver, 20);
  }
  screensaver();
});
