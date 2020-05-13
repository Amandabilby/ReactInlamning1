// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";


import axios from "axios";


class AdminProfile extends Component{
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
    }
    render(){
        window.location.reload(false);

        return(
        
            <div>
            <div className={"loggedIn"}>
                <h5>Välkommen! Du är inloggad som: {this.props.userData} <br/> </h5>

                 <button className={"btn"} onClick={this.logOut.bind(this)}> Logout</button>
                 </div>

            </div>
        )
        
    }
}




export default AdminProfile;

