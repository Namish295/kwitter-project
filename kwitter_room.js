const firebaseConfig = {
      apiKey: "AIzaSyBEo4RZDvT_ORHzkbo9uE2mVTpj7K2UYds",
      authDomain: "kwitter-efe4a.firebaseapp.com",
      databaseURL: "https://kwitter-efe4a-default-rtdb.firebaseio.com",
      projectId: "kwitter-efe4a",
      storageBucket: "kwitter-efe4a.appspot.com",
      messagingSenderId: "888861290179",
      appId: "1:888861290179:web:8d95e234ffa397c287bc76"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
