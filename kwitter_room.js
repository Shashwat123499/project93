var firebaseConfig = {
    apiKey: "AIzaSyBw2GaiD77UXU-PuNktiSg9p7zZEFQ9Kx8",
    authDomain: "project-93-c1d9c.firebaseapp.com",
    databaseURL: "https://project-93-c1d9c-default-rtdb.firebaseio.com",
    projectId: "project-93-c1d9c",
    storageBucket: "project-93-c1d9c.appspot.com",
    messagingSenderId: "565957592329",
    appId: "1:565957592329:web:ccfcfc065e8017d0173fd8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  console.log("user name ->" + user_name);
  document.getElementById("user_name_label").innerHTML = "Welcome " + user_name + "!";

  function logout() {
    window.location = "index.html";
    localStorage.clear();

  }

  function addRoom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update ({
      purpose: "Adding Room Name"
 
  });
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}