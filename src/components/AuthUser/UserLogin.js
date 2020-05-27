
import React, {Component} from "react";
import firebase from "../FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import UserProfile from "./UserProfile";
 
 
class UserLogin extends Component {
 
 state= {
     condition:true,
     user:""
 }

 uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl:'/userprofile',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID, 
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ]
  };

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
       this.setState({user:user.email}) 
       console.log(user);
    })
    //skicka data till parent
}
 onClickRegister(){
     this.setState({condition:false})
 }
 
 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();
 
const email= e.target.elements.email.value;
const password = e.target.elements.password.value;
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res=> this.props.userCredential(res.user.email))
 
   
 
}
 
 onSubmitRegister(e){
     e.preventDefault();
     const email= e.target.elements.email.value;
     const password= e.target.elements.password.value;
     const displayName = e.target.elements.username.value;
     e.preventDefault();

 
     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then( (res)=>{

// från child till parent med hjälp callback funktion 
         res.user.sendEmailVerification()
        //
    this.props.userCredential(res.user.email)
        // 
    this.props.showDisplayName(displayName)
     })
     //.then(()=>{
     /*      firebase.auth().onAuthStateChanged((user)=>{
            user.updateProfile({
         displayName :username
     })
  console.log("display name"+ this.state.displayName)}) */
    // })

 // aktivera verifering av email
 
 }
 resetPassword(e){
    var auth = firebase.auth();
var emailAddress = e.target.elements.resetEmail.value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
 // Email sent.
 console.log("email sent")
})
e.preventDefault();
}

/* componentDidMount(){
    firebase.auth().onAuthStateChanged((user)=>{
                           user.updateProfile({
                               displayName :username
                           }))
}
} */

    render(){
        return(
            <div className={"userlogin"}>
             
 
         {this.state.condition  &&
         <div>
            <h2>Välkommen! Logga in</h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                   E-mail: <input type="email"   name="email"/> <br/>
                  Lösenord:  <input type="password" name="password" /><br/>
                    <button className={"btn"}>Logga in</button>
                </form>

                <h4>Eller logga in via..</h4>
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                 </div>
               
                }
               
               
           {!this.state.condition &&
 
           <div>
               <h2>Ny användare</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                     Användarnamn: <input type="text" name="username"/><br/>
                     Email: <input type="email" name="email" /><br/>
                     Lösenord: <input type="password" name="password" /><br/>
 
                    <button className={"btn"}>Registrera</button>
 

                 

                </form>
                
                <div>
      </div>

           {this.state.user? <UserProfile userData={this.state.user} /> : <div> </div>}



                </div>

                
               
                }
 
{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button className={"btn"} onClick={this.onClickLogin.bind(this)}>Logga in</button>
<button className={"btn"} onClick={this.onClickRegister.bind(this)}>Ny medlem?</button>
               
 
            </div>
        )
    }
}
 
export default UserLogin;