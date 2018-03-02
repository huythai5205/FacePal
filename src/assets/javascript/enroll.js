//var firstName ='chad';
//var lastName = 'chazmister';
//var profileImage = 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg';

var enrollUser = function (firstName,lastName,img) {
  var request = new XMLHttpRequest();

  request.open("POST", "https://api.kairos.com/enroll");

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("app_id", "299078c0");
  request.setRequestHeader("app_key", "0004235442d8fe37c6a315b2de0a40e8");

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };

  var body = {
    'image': 'https://emilyhosoya.github.io/FacePal/user_images/' + img ,
    'subject_id': firstName+lastName,
    'gallery_name': "FirstGallery",
  };

  //test
  console.log('enroll.js log'+img);
  console.log('enroll.js log'+firstName);
  console.log('enroll.js log'+lastName);
  
  request.send(JSON.stringify(body));
  
};
