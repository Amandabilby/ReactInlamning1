/* import React from "react";
import Footer from "../components/Footer"
import {Link} from "react-router-dom";




const Booking =()=>{
    return (
        <div>
            <div className={"bookings"}>
            <h2>Bokade tider: </h2>

            Måndag 1/1 kl 13:00
            <Link class={"btn"} to="/">Avboka</Link>

            </div>

        </div>
    )
}

export default Booking; */


import React , { Component } from "react";

import firebase from "./FirebaseConfig"

class Booking extends Component {
    

    onClickGetBookings() {
        const docRef= firebase.firestore().collection("Products").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.id, " => ", doc.data());
            

            });
        });
    } 

    
        


render(){

    return(
    <div>
        <button onClick= {this.onClickGetBookings.bind(this)} className={"btn"}>Visa alla bokningar</button>
   

<div className={"cards"} style={{ width: "18rem" }}>
<img src={this.props.image} className={"card-img-top"} alt={"Boka"} />
<div className={"card-body"}>
    <h5 className={"card-title"}> {this.props.title}</h5>
    <p className={"card-text"}>{this.props.description} </p>
    Pris: <span>{this.props.price}</span> SEK          </div>
</div>
</div>
    )
}
}





export default Booking;

