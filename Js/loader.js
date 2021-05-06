$(function () {
  $(this).scrollTop(0);
  function progress() {
    // $(window).css("scroll-behaviour", "none");
    var percent = document.querySelector(".percent");
    var progress = document.querySelector(".progress");
    var text = document.querySelector(".text");
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
        text.style.display = "block";
        setInterval(() => {
          $(".loading").addClass("finished");
          $("body").css("overflow", "auto");
        }, 1000);
        setInterval(() => {
          $("#landed").css("opacity", "1");
          $(".products").addClass("animate__fadeInUp");
          $("#lorems").addClass("animate__fadeInUp");
          $(".socks").addClass("animate__fadeIn");
          $("#adds").addClass("animate__fadeInUp");
        }, 2000);
        clearInterval(loading);
      } else {
        per = per + 1;
        count = count + 1;
        progress.style.width = per + "%";
        percent.textContent = count + "%";
        $("body").css("overflow", "hidden");
      }
    }
  }

  progress();
});
