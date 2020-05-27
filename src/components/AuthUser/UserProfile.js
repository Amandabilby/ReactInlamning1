// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";

import firebase from "../FirebaseConfig";

//navigate("/userprofile")



class UserProfile extends Component{

    updateEmail(e){
        e.preventDefault();

    const email        = e.target.elements.email.value;

    var user = firebase.auth().currentUser;

    user.updateEmail(email).then(function() {
  // Update successful.
    }).catch(function(error) {
  // An error happened.
    });
}
      
    
    logOut(){
       
       localStorage.clear();
       window.location.reload(false);
       //
       firebase.auth().signOut();
    }
   
    newPassword(){
        const userfromLocal = localStorage.getItem("user");
        console.log(userfromLocal);
        var user = firebase.auth().currentUser;
        console.log(user);
    
    if(user){
         user.newPassword().then(function() {
     
    }).catch(function(error) {
    });
}
    }
 
deleteAccount(){
    const userfromLocal = localStorage.getItem("user");
    console.log(userfromLocal);
    var user = firebase.auth().currentUser;
    console.log(user);

if(user){
     user.delete().then(function() {
  // User deleted.
      localStorage.clear();
       window.location.reload(false);
}).catch(function(error) {
  // An error happened.
});

}
}








    render(){
        return(
            <div className={"userlogin"}>
                Profilinställningar <br/>  {this.props.userData} 
                  Radera ditt konto: <button className={"btn"} onClick={this.deleteAccount.bind(this)}> Radera konto</button>

        <form onSubmit={this.updateEmail.bind(this)}>
        Byt email-adress: 
        <input type="email" name="email" />
    
        <button className={"btn"} type="submit">Uppdatera email-adress</button>
    </form>
<form onSubmit={this.newPassword.bind(this)}>
                  <input type="text" name="newPassword"/>

                <button className={"btn"} type="submit"> Byt lösenord</button>

                  </form>
                  <button className={"btn"} onClick={this.logOut.bind(this)}> Logga ut</button>

          
                 
            </div>
        )
    }
}


export default UserProfile;


// kontaktförmuläret till din email 