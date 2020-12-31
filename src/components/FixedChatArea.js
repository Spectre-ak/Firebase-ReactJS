import firebase from "firebase"
import React from 'react';
import ReactDOM from 'react-dom';



var sendingReference="";
var recevingReference="";
var currentUserName="";
var userWithChatting="";

function FixedChatArea(props){
	console.log(props.recevingReference);
	console.log(props.sendingRefrence);
	console.log(props.sendingRefrence);
	sendingReference=props.sendingRefrence;
	recevingReference=props.recevingReference;
	currentUserName=props.currentUserName;
	userWithChatting=props.userWithChatting;

	console.log("receving refrence is "+props)
	getMsgs();
	return(
			<div>
				<br/>
				<div className="container" id="FixedChatAreaMainDivId">
					</div>
				<div className="container" id="FixedChatAreaMainDivIdInputMessage">
					

					<input type="text" id="inputForTextDuringChat"/>
					<button type="submit" id="buttonDuringChatId" onClick={function(e){sendMessage()}}>Send</button>
				</div>
				
			</div>
			
		)
}
//now setting up the receiving messages system

var allreceivedMsgs=[]
function getMsgs(){
	var vals=firebase.database().ref(recevingReference);
    vals.on('value',function(snapshot){
    	console.log("how many times executed "+data)
    	var data=snapshot.val();
    	if(data!=null){
    		console.log("data is ------- "+data);
			for(var key in data){
				console.log("data[key] is here "+data[key]);
				console.log("messages is "+data[key]["msg"]);
				var receivedMesasge=data[key]["msg"];

				if(allreceivedMsgs.includes(receivedMesasge))continue;
				allreceivedMsgs.push(receivedMesasge);

				var time=receivedMesasge.split("!`!`1`1~~@@~")[1];
				var message=receivedMesasge.split("!`!`1`1~~@@~")[0];
				var msg=document.createElement("p");
				var userWithChattingSmallTag=userWithChatting.small();
				time=time.small();


				var a=document.createElement("a");
		  		a.innerHTML=userWithChattingSmallTag.small()+" ";
		  		a.style.color="#e4ff00"

		  		var aMsg=document.createElement("a");
		  		aMsg.innerHTML=message;

		  		var aTime=document.createElement("a");
		  		aTime.innerHTML=" "+time.small();
		  		aTime.style.color="#e4ff00"

		  		msg.appendChild(a);
		  		msg.appendChild(aMsg);
		  		msg.appendChild(aTime);


				//msg.innerHTML=userWithChattingSmallTag.small()+" "+message+" "+time.small();



				//msg.style.backgroundColor="#ffb700";
				
				document.getElementById("FixedChatAreaMainDivId").appendChild(msg);
				console.log("\n");
				console.log("cehckl!#123213!@#21#################");
				document.getElementById("FixedChatAreaMainDivId").scrollTop=document.getElementById("FixedChatAreaMainDivId").scrollHeight;
			}
			firebase.database().ref(recevingReference).remove();
		}

    });
	
}






function sendMessage(argument) {

	//alert(currentUserName+" receving database is "+recevingReference+ " and sending datyabse ois "+sendingReference);
	//alert(document.getElementById("inputForTextDuringChat").value +" "+sendingReference+" rece is "+recevingReference)
	var messageToSend=document.getElementById("inputForTextDuringChat").value;
	if(messageToSend.length==0)alert("Invalid Message");
	else{
		//firebase.database().ref('AvailableChats').push().child("user").set(username);
		var Currtime=new Date();
		var time=Currtime.getHours()+":"+Currtime.getMinutes()+":"+Currtime.getSeconds();
		//firebase.database().ref("onGoingChats").child(sendingReference).push().child("msg").set(messageToSend+"!`!`1`1~~@@~"+time);
		firebase.database().ref(sendingReference).push().child("msg").set(messageToSend+"!`!`1`1~~@@~"+time);
		
		time=time.small();
		var msg=document.createElement("p");
		//msg.appendChild(document.createTextNode(messageToSend+" "+time.small()));\

		var userNameWithSmallTag=currentUserName.small();
		
		var a=document.createElement("a");
  		a.innerHTML=userNameWithSmallTag.small()+" ";
  		a.style.color="#e4ff00"

  		var aMsg=document.createElement("a");
  		aMsg.innerHTML=messageToSend;

  		var aTime=document.createElement("a");
  		aTime.innerHTML=" "+time.small();
  		aTime.style.color="#e4ff00"

  		msg.appendChild(a);
  		msg.appendChild(aMsg);
  		msg.appendChild(aTime);

		//msg.innerHTML=userNameWithSmallTag.small()+" "+messageToSend+" "+time.small();

		msg.style.textAlign="right";

	//	msg.style.backgroundColor="#00ff1b";
		document.getElementById("FixedChatAreaMainDivId").appendChild(msg);
		document.getElementById("FixedChatAreaMainDivId").scrollTop=document.getElementById("FixedChatAreaMainDivId").scrollHeight;
	}
}



export default FixedChatArea;

/*<p style={{textAlign:'right'}}>Akash Upadhyay</p>
<p>Akash Upadhyay</p><p>Akash Upadhyay</p><p>Akash Upadhyay</p>*/
