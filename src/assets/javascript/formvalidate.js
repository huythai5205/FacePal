// Form validation
// let formIsValid = false;

var formChecker = function() {
  $("#signup").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
    },
      dob: "required",
      img: "required"
    },
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      email: "email is required",
      dob: "Date of birth is required",
      img: "An image is required for facial recognition."
    },
    submitHandler: function(form) {
        // do other things for a valid form
        form.submit();
      }

  });
  window.location.assign("./2_Your_Info.html")       
  
}