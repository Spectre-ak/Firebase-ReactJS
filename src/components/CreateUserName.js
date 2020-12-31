import firebase from "firebase"
import React from 'react';
import ReactDOM from 'react-dom';
import FixedChatArea from './FixedChatArea.js';
import AvailableChats from './AvailableChats.js';
import Topnavabr from './TopNavBar.js';


var sendingDatabase;
var recevingDatabase;var currentUserName;
var username;
var userWithChatting;


function removeloginContainerDivAndShowListOfAvailableUsers(){
	//document.getElementById("loginContainer").remove();
	ReactDOM.render(
	  <AvailableChats/>,
	  document.getElementById('mainDiv')
	);
	ReactDOM.render(
	  <Topnavabr userName={username}/>,
	  document.getElementById('headerGoesHere')
	);
	var AvailableUsersList=[];
	var index=0;
	var vals=firebase.database().ref('AvailableChats');
    vals.on('value',function(snapshot){
    	var data=snapshot.val();
    	console.log(data);
		for(var key in data){
			console.log(data[key]);
			console.log(data[key]['user']);
			if(!AvailableUsersList.includes(data[key]['user']))
				AvailableUsersList.push(data[key]['user']);
		}
		 console.log(AvailableUsersList);
		for (var i =index; i<AvailableUsersList.length;index++,i++) {
			if(AvailableUsersList[i]==currentUserName)continue;
		 	 const outerDiv=document.createElement("div");
			 outerDiv.className="container";
			 outerDiv.appendChild(document.createTextNode(AvailableUsersList[i]));
			 outerDiv.style.border = "2px solid #34799b";
			 outerDiv.style.borderRadius="25px";
			 //outerDiv.style.backgroundColor="rgb(107 107 107)";
			 outerDiv.style.marginBottom='25px';
			 outerDiv.style.marginTop='25px';
			 outerDiv.style.textAlign="center";
			 outerDiv.style.maxWidth="500px";
			// outerDiv.style.boxShadow="5px 5px grey";
			 outerDiv.onclick=function(){checkWorkingClicked(this)};
			 document.getElementById("AvailableChatsMainDivId").appendChild(outerDiv);
		 }
	});
}
function checkWorkingClicked(args){
	//console.log(args.textContent);
	//alert(args.textContent);
	var userToChat=args.textContent;
	userWithChatting=userToChat;
	removeAvailableChatsMainDivIdandAddFixedChatAreaDiv(userToChat);
}
function removeAvailableChatsMainDivIdandAddFixedChatAreaDiv(argument){
	//document.getElementById("AvailableChatsMainDivId").remove();
	var sendingRefrence=username+"to"+argument;
	var recevingReference=argument+"to"+username;
	//alert(sendingRefrence);
	ReactDOM.render(
	  <FixedChatArea sendingRefrence={sendingRefrence} recevingReference={recevingReference} currentUserName={currentUserName} userWithChatting={userWithChatting}/>,
	  document.getElementById('mainDiv')
	);
}

function clicked() {
	username=document.getElementById("inputForText").value;
	if(username.length==0)alert("InvalidName");
	else{
		firebase.database().ref('AvailableChats').push().child("user").set(username);
		currentUserName=username;
		removeloginContainerDivAndShowListOfAvailableUsers();
		
		
	}
}
function CreateUserName() {
	return(
			<div className="container" id="loginContainer">
			<br/><br/><br/><br/><br/>
				Enter Your Name<br/><br/>
				<input type="text" id="inputForText"/><br/><br/>
				<button id="buttonForSubmit" onClick={function(e){clicked();}}>OK</button>
			</div>
		)
}
export default CreateUserName;