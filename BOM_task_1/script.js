const myWindow = window.open("", "", "width=300, height=300");

setTimeout(function () {
  myWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function () {
  myWindow.moveTo(200, 200);
}, 4000);

setTimeout(function () {
  myWindow.close();
}, 6000);
