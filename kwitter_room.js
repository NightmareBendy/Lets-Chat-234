const firebaseConfig = {
      apiKey: "AIzaSyCHa48lb1JOsjqZ7ORjCCvDr0kf2RupeRY",
      authDomain: "letschat-8b0d7.firebaseapp.com",
      databaseURL: "https://letschat-8b0d7-default-rtdb.firebaseio.com",
      projectId: "letschat-8b0d7",
      storageBucket: "letschat-8b0d7.appspot.com",
      messagingSenderId: "320585185004",
      appId: "1:320585185004:web:1d328b5c90bbe69ea997c9",
      measurementId: "G-B3BWWZT4D4"
    };
const app = initializeApp(firebaseConfig);

function getData() 
{
      firebase.database().ref("/").on('value', function(snapshot) 
            {document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) 
                  {childKey  = childSnapshot.key;
                  room_names = childKey;
                  console.log ("Room Name - " + room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  });
         });
}
function addRoom()
{
      Room_names = document.getElementById ("room_names").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "add room"
      });

      localStorage.setItem("room_name", room_name);
      console.log("room_name")
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}