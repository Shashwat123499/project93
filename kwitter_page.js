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
  room_name = localStorage.getItem("room_name");

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like:0
  });

  document.getElementById("msg").value = "";
  }

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
