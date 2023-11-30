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
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
console.log("Nombre de la sala: " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row; 
      //Finaliza el código
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"  
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}