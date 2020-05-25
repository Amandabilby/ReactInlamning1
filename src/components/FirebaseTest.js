import React , { Component } from "react";

import firebase from "./FirebaseConfig"

class FirebaseTest extends Component {
    

    onClickFirebase() {
        const docRef= firebase.firestore().collection("booking").doc("info")

        // läser data från firebasre
        docRef.get().then( booking =>{
         if(booking.exists) {
             console.log("document data: ", booking.data() )
            
        }
        else{
            console.log("error !")
        }
        
    })
    // skriva data i firebase

    docRef.set({
        item:"test",
        price:2000
    })
}

    render(){

        return(
        <div>
            <button onClick= {this.onClickFirebase.bind(this)}>Hämta firestore info</button>
        </div>
        )
    }
}


export default FirebaseTest;