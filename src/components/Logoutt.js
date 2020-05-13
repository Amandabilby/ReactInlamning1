import React, { Component } from "react";
import AdminLogout from "./auth/AdminLogout";
import Login from "./auth/Login";

class AdminSida extends Component {
    state = {
        user: null || localStorage.getItem("user"),
        jwt: null
    }
    render() {
        const loggedIn = this.state.user||localStorage.getItem("jwt");
        return (
            <div>
                {!loggedIn ?
                    <Login/> 
                    :
                    <AdminLogout userData={this.state.user} />
                }
            </div>
        )
    }
}

export default AdminSida;
