
function Topnavbar(prop){
	// /#0b0b0ce6
	var username2=prop.userName;
	console.log(username2);
	if(username2=="null")username2="Welcome!";
	return(
			<nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
				<div className="container" >
				    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" 
				    onClick={function(e){
				    	//var vall=document.getElementById("Navbar").style.backgroundColor;
				    	//if(vall=="")
				    	//	document.getElementById("Navbar").style.backgroundColor="#0b0b0ce6";
				    	//else document.getElementById("Navbar").style.backgroundColor="";
				    }}>
		                <span className="navbar-toggler-icon"></span>
		            </button>
				<a className="navbar-brand mr-auto" href="#" style={{paddingRight:20,paddingLeft:10}}>{username2}</a>
				
				<div className="collapse navbar-collapse" id="Navbar">
						<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a className="nav-link" href="#" onClick={function(e){window.location.reload(false);}}>Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" onClick={function(e){window.location.reload(false);}}>Change User</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" onClick={function(e){window.location.reload(false);}}>Change Name</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Report User</a>
						</li>
					</ul>
				</div>
			</div>
			</nav> 
		)
}





















export default Topnavbar;
/*




*/