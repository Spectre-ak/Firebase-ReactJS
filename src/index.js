import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import firebase from "firebase"
import App from './App';
import Topnavabr from './components/TopNavBar.js';
import FixedChatArea from './components/FixedChatArea.js';
import CreateUserName from'./components/CreateUserName.js';

var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
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

