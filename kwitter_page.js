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
    { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
      { document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) 
            { childKey  = childSnapshot.key;
      childData = childSnapshot.val();
       if(childKey != "purpose") 
                  {
            firebase_message_id = childKey;
            message_data = childData;

                  }
            });  
      });
}
function send()
{
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name: user_name,
      message:msg,
      like:0
});

      document.getElementById("msg").value = "";
}
function logout()
{
      window.location = "kwitter_room.html";
}