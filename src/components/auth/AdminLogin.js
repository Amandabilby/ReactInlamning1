
import React, {Component} from "react";
import axios from "axios";


class AdminLogin extends Component {


 state= {
     condition:true, 
     user:""
 }
 onClickRegister(){
     this.setState({condition:false})
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
    // error handler
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
    // success handler
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
     this.props.userCredential(response.data.user, response.data.jwt)
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });
 }
    render(){
        return(
            <div className={"Login"}>
            <div> 
             

         {this.state.condition  && 
         <div className={"loginForm"}>
            <h2>Logga in </h2>
         <form   onSubmit={this.onSubmitLogin.bind(this)}>
                   E-mail: <input type="email"   name="email"/><br />
                   Lösenord: <input type="password" name="password" /> <br />
                    <button className={"btn"}>Logga in</button>
                </form>
                 </div>
                
                }
                
               
           {!this.state.condition &&

           <div>
               <h2>Registrera</h2>
            <form onSubmit={this.onSubmitRegister.bind(this)}>
                    <input type="text" name="username"/><br/>
                     <input type="email" name="email" /><br/>
                    <input type="password" name="password" /><br/>

                    <button className={"btn"}>Registrera!</button>

                </form>
                </div>
                
                }

{/* <button onClick={this.onClickRegister.bind(this)}>Don't have an account?</button> */}
<button className={"btn"} onClick={this.onClickLogin.bind(this)}>Logga in</button>
<button className={"btn"} onClick={this.onClickRegister.bind(this)}>Registrera</button><br/>
                

            </div>
            </div>
        )
    }
}

export default AdminLogin;