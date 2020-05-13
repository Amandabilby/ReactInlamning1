import React from "react";
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

export default Booking;