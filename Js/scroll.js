$(".outer-wrap").mousewheel(function (event, delta) {
  event.preventDefault();
  this.scrollLeft -= delta * 200;
});
