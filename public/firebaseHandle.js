var sendingDatabase;
var recevingDatabase;
var firebaseConfig = {
      apiKey: "AIzaSyBCiec200q3DXiXtE54t4PuNFThQnbXCl0",
      authDomain: "ne-7664f.firebaseapp.com",
      databaseURL: "https://ne-7664f.firebaseio.com",
      projectId: "ne-7664f",
      storageBucket: "ne-7664f.appspot.com",
      messagingSenderId: "578526438847",
      appId: "1:578526438847:android:a431b66f2b2e98a9f32d0a",
     // measurementId: "G-MEASUREMENT_ID",
  };
firebase.initializeApp(firebaseConfig);
alert("asdasd")
function clicked() {
	var username=document.getElementById("inputForText").value;
	if(username.length==0)alert("InvalidName");
	else{
		sendingDatabase=firebase.database().ref('newChat');
		firebase.database().ref('newChat').child(username).set("present");
	}
}