import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Main";
import Card from "./Card";
import NotFound from "./NotFound";
import Navbar from "./Navbar";
import Formular from "./Formular"
// import Eventtest from "./Eventtest";
import App from "./App";
import Adminform from "./Adminform";
import AdminLogin from "./auth/AdminLogin"
import AdminSida from "./AdminSida";
import Booking from "./Booking";
import Footer from "./Footer";
import Logoutt from "./Logoutt";
import NewProduct from "./NewProduct";
import FirebaseTest from "./FirebaseTest";
import UserPage from "./AuthUser/UserPage";
import UserProfile from "./AuthUser/UserProfile";

// import Apitest from "./Apitest";

const Approute = ()=>{

    return (
        <div>
              
            <BrowserRouter>

                    <Navbar/>
                  

                    <Route path="/" component={App} exact ></Route>

                    <Route path ="/card" exact component= {Card}></Route>
                    <Route component= {NotFound} ></Route>
                    <Route path="/admin" exact component= {Formular}/>
                    <Route path="/adminsida" exact component={AdminSida}></Route>
                    <Route path="/booking" exact component={Booking}></Route>
                    <Route path="/Logoutt" exact component={Logoutt}></Route>
                    <Route path="/userprofile" exact component={UserProfile}></Route>

                    <Route path="/NewProduct" exact component={NewProduct}></Route>
                    <Route path="/FirebaseTest" exact component={FirebaseTest}></Route>
                    <Route path="/userpage" exact component= {UserPage}></Route>


                     <Footer/>
                    
    
            </BrowserRouter>

        </div>
    )
}


export default Approute;