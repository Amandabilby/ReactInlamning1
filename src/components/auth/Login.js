
// register / login 
// conditional rendering
// state 

import React, {Component} from "react";
import axios from "axios";


class AdminLogin extends Component {

//via props
 state= {
     condition:true, 
     user:""
 }


 onClickLogin(){
    this.setState({condition:true})
 }
onSubmitLogin(e){
    e.preventDefault();
    axios
   .post('http://localhost:1337/auth/local', {
    identifier: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    //uppdatera state med response , localhost
   //this.props.userInfo(response.data.jwt)
   this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
}

 onSubmitRegister(e){
     e.preventDefault();
     axios
    .post('http://localhost:1337/auth/local/register', {
    username: e.target.elements.username.value,
    email: e.target.elements.email.value,
    password: e.target.elements.password.value,
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    //localhost eller state med response data
     this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });
 }
    render(){

        return(

<p className={"notLoggedIn"} onClick={this.onClickLogin.bind(this)}>Du är inte inloggad</p>
                

        )
    }
}

export default AdminLogin;