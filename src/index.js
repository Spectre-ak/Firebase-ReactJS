import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from "firebase"
import App from './App';
import Topnavabr from './components/TopNavBar.js';
import FixedChatArea from './components/FixedChatArea.js';
import CreateUserName from'./components/CreateUserName.js';

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
function CreateTags(){
	return(
		<div>
			<div id="mainDiv"></div>
			<div id="testDIV"></div>
			
		</div>
		)
}
ReactDOM.render(
  <CreateTags/>,
  document.getElementById('root')
);

//document.getElementById("headerGoesHere").appendChild(<Topnavabr/>)
ReactDOM.render(
  <CreateUserName/>,
  document.getElementById('mainDiv')
);
ReactDOM.render(
  <Topnavabr userName={"null"}/>,
  document.getElementById('headerGoesHere')
);

/*ReactDOM.render(
  <FixedChatArea/>,
  document.getElementById('divforChatFixedArea')
);*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

