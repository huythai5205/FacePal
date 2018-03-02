var config = {
  apiKey: "AIzaSyDUnxL1x14WGo0ZFV2okfnh6ekHWVsL6Hs",
  authDomain: "facepal-a9ecc.firebaseapp.com",
  databaseURL: "https://facepal-a9ecc.firebaseio.com",
  projectId: "facepal-a9ecc",
  storageBucket: "facepal-a9ecc.appspot.com",
  messagingSenderId: "603932838503"
};
firebase.initializeApp(config);

// Get the modal
var modal = document.getElementById("id01");

function hideLogin() {
  $("#id01").modal("close");
}

function showLogin() {
  $("body").prepend(`<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php">
    <div class="imgcontainer">
      <span onclick="hideLogin()" class="close" title="Close Modal">&times;</span>
      
    </div>

    <div class="container">
      <label><b>Email:</b></label>
      <input type="text" placeholder="Your Email" name="uname" required>

      <label><b>Password:</b></label>
      <input type="password" placeholder="Enter Password" name="password" required>
        
      <button class="btn" type="submit">Login</button>
      <button type="button" onclick="hideLogin()" class="btn cancelbtn">Cancel</button>
    </div>
  </form>
</div>`);
  $("#id01").modal();
  $("#id01").modal("open");

  // $.ajax({url: './test.html', method: 'get'}).done(response =>
  // {
  //   $(body).append(response);
  // });
  // fetch('./test.html', {mode: 'cors', method: 'get'}).then((response) => response.text()).then((html) =>
  // {
  //   $(body).append(html);
  // });
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})(function() {
  var app = document.querySelector("#app");
  app.signIn = function() {
    var email = app.email;
    var password = app.password;
    if (!email || !password) {
      return console.log("email and password required");
    }
    // Sign in user
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("signIn error", error);
        // ...
      });
  };
  app.register = function() {
    var email = app.email;
    var password = app.password;
    if (!email || !password) {
      return console.log("email and password required");
    }
    // Register user
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log("register error", error);
        if (error.code === "auth/email-already-in-use") {
          var credential = firebase.auth.EmailAuthProvider.credential(
            email,
            password
          );
          app.signInWithGoogle().then(function() {
            firebase
              .auth()
              .currentUser.link(credential)
              .then(
                function(user) {
                  console.log("Account linking success", user);
                },
                function(error) {
                  console.log("Account linking error", error);
                }
              );
          });
        }
      });
  };
  app.signInWithGoogle = function() {
    // Sign in with Google
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    return firebase
      .auth()
      .signInWithPopup(provider)
      .catch(function(error) {
        console.log("Google sign in error", error);
      });
  };
  app.signOut = function() {
    // Sign out
    firebase.auth().signOut();
  };
  // Listen to auth state changes
  firebase.auth().onAuthStateChanged(function(user) {
    app.user = user;
    console.log("user", user);
  });
})();
