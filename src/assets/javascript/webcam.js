//let imageData = "";
let verifyImage = "";

var webcamModule = function() {
  var streaming = false;
  var video = null;

  // image return

  // console.log("TEST" +imageData);

  (function() {
    video = document.getElementById("webcamVideo");
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then(function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
        localStream = stream.getTracks()[0];
      })
      .catch(function(err) {
        console.log(err);
      });
    video.addEventListener(
      "canplay",
      function(ev) {
        if (!streaming) {
          video.setAttribute("width", "600");
          video.setAttribute("height", "450");
          streaming = true;
        }
        var captureInterval = 5000;
        var countdown = captureInterval / 1000;
        var counterFunction = setInterval(function() {
          $("#showCounter").html(countdown);

          //Take the picture
          if (countdown <= 0) {
            takepicture(video);
            clearInterval(counterFunction);
            localStream.stop();
          }
          countdown--;
        }, 1000);
      },
      false
    );
  })();

  console.log("verify image: " + verifyImage);
};

var takepicture = function(video) {
  $("#showCounter").html("Retrieving data...");
  var canvas = document.createElement("CANVAS");
  var context = canvas.getContext("2d");
  canvas.width = "600";
  canvas.height = "450";
  // draw video image onto canvas, get data
  context.drawImage(video, 0, 0);
  var imageData = canvas.toDataURL("image/png");
  $("#showCounter").html("See image data in console.");
  $(video).hide();
  console.log(imageData); ///return

  //return imageData;
  verifyImage = imageData.split(",")[1];

  //Copy image data
};
