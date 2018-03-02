//let verifyString = "";
// function afterload (){

// } ;

var verifyUser = function(firstName, lastName, verifyImage) {
  async: false,//added for timing
  console.log("1 inside verifyUser");
  console.log("2 My Input Parms");
  console.log("3" + firstName + lastName);
  console.log("4 verifyImage" + verifyImage);

  var request = new XMLHttpRequest();

  request.open("POST", "https://api.kairos.com/verify");

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("app_id", "299078c0");
  request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log("5 Status:", this.status);
      console.log("6 Headers:", this.getAllResponseHeaders());
      console.log("7 Body:", this.responseText);//.ajaxComplete.afterload();

      //verifyString = this.responseText;
     // console.log("8 verifyString Test", verifyString);
      //document.getElementById("writeIt").innerHTML = this.responseText;//added
    }
  };

  var body = {
    image: verifyImage,
    gallery_name: "FirstGallery",
    subject_id: firstName + lastName
  };

  request.send(JSON.stringify(body));
  //console.log("111111");

  // if(images[0].transaction.confidence > 0.60){
  //     console.log("Success!")
  // } else {
  //     console.log("Failure")
  // }
  // if confidence is greater than .6, show modal
  // $("#modal-header").text("Success!");
  // $("#modal-message").text("Your payment has been sent.");
  //  // else show failure message in modal
  // $("#modal-header").text("Uh oh!");
  // $("#modal-message").text("You aren't the authorized user for this transaction.");
  // $('.modal').modal();
  // $('#modal1').modal('open');
};
