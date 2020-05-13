import React from "react";
import {Link} from "react-router-dom";
import Formular from "./Formular"
import axios from "axios";
import Logoutt from "./Logoutt";




const Navbar = ()=>{



    return(

        <nav className={"navbar"}>
  <Link className={"nav-item"} to="/">FRISÖR</Link>
      <Link className={"nav-item"} to="/">Hem <span className="sr-only">(current)</span></Link>
       <Link className={"nav-item"} to="/Booking">Mina sidor</Link>
       <Link className={"nav-item nav-link"} to="/adminsida">Admin</Link>
       <Link className={"nav-item nav-link"} to="/NewProduct">Admin sida</Link>

<Logoutt/>


       

  
</nav>
    )
}


export default Navbar;
