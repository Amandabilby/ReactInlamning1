// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";
import Formular from "../Formular"


import axios from "axios";


class AdminLogout extends Component{
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
    }
    render(){
        return(
            <div>
          <button className={"btn"} onClick={this.logOut.bind(this)}>Logga ut</button>
                 </div>
        )
        
    }
}




export default AdminLogout;

