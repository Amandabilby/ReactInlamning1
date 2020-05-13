// testa skapa:  Dashboard
//admin profile
import React, {Component} from "react";
import Formular from "./Formular"


import axios from "axios";


class AdminProfile extends Component{
    
    logOut(){
        localStorage.clear();
        window.location.reload(false);
    }
    render(){

        return(
            <div>
         
                 <Formular/>

            </div>
        )
        
    }
}




export default AdminProfile;

