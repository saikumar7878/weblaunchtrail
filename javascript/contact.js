// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAcGJcrl4lDFk9hA1oyZ7hfyygaeOGbxeU",
    authDomain: "contact-form-7e179.firebaseapp.com",
    projectId: "contact-form-7e179",
    storageBucket: "contact-form-7e179.appspot.com",
    messagingSenderId: "984787472200",
    appId: "1:984787472200:web:54ad648baad616bd3bad7d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//function call that submits the data to the database from contact form
function Submit(){
    var cname = document.querySelector(".cname").value;
    var cemail = document.querySelector(".cemail").value;
    var cnum = document.querySelector(".cnum").value;
    var cneeds = document.querySelector(".cneeds").value;
    var match = /^\d{10}$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //verifying whether all the fields data is entered or not
    if (cname.length!=0 && cemail.length!=0 && cnum.length!=0 && cneeds.length!=0) {
      //condition to check the phonenumber is 10 digit long
      if(cemail.match(mailformat)){
          if (cnum.match(match)) {
            firebase.database().ref('clientsinformation/'+cnum).set({
              client_name:cname,
              client_email:cemail,
              client_number:cnum,
              client_needs:cneeds,
            });
        //message that data is submitted to database
        alert('Your quote was successfully submitted🙂. We will get back to you as soon as possible');
        document.querySelector(".quote").reset();
      }
      else{
        alert('Enter a valid phonenumber 📱📲');
      }
    }
    else {
        alert('Enter a valid mail 📧');
    }
  }
    else {
      alert('Please enter data in all the fields 😝🧠');
    }
}
