//TUS ENLACES DE FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyD0V0D6g9uONTBrzhJa4MuSV4nY72r2GIc",
      authDomain: "foxwer-b553e.firebaseapp.com",
      databaseURL: "https://foxwer-b553e-default-rtdb.firebaseio.com",
      projectId: "foxwer-b553e",
      storageBucket: "foxwer-b553e.appspot.com",
      messagingSenderId: "239113266719",
      appId: "1:239113266719:web:e986e9ac4b7db620f3d72a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "</h4>";
                        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'>Likes :" + like + "</button>";
                        row = name_with_tag + message_with_tag + like_button;
                        document.getElementById("output").innerHTML += row;
                        //Termina código>

                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}
function updateLike(message_id) {
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_Likes = Number(likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like: update_Likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}