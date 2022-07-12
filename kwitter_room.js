
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAj8L9WUawUM_M95YK6ZsXk14OXGoX0gi4",
      authDomain: "skitter-8aa5c.firebaseapp.com",
      databaseURL: "https://skitter-8aa5c-default-rtdb.firebaseio.com",
      projectId: "skitter-8aa5c",
      storageBucket: "skitter-8aa5c.appspot.com",
      messagingSenderId: "606077583674",
      appId: "1:606077583674:web:dd8e265d32071ead565003"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
