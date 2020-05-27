import React, {Component} from "react";

import firebase from "./FirebaseConfig";


class Card  extends Component {

onClickSaveToFirestore(){
            
   const docRef=  firebase.firestore().collection("Products").doc(this.props.docId.toString());
     
    
   docRef.set({


       name: this.props.title,
       description: this.props.description,
       price: this.props.price

   })

   alert("Booking done!")

   } 
   componentDidMount(){
    firebase.auth()
    .onAuthStateChanged(

        user=>{ if(user) { this.setState({

        user: user.email, 
        displayName: user.displayName
        
        })} else {

        this.setState({user: localStorage.getItem("user")})
        } 

        }
        
    )
}
render(){


    return (
        <div className={"cards"} style={{ width: "18rem" }}>
            <img src={this.props.image} className={"card-img-top"} alt={"Boka"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {this.props.title}</h5>
                <p className={"card-text"}>{this.props.description} </p>
                Pris: <span>{this.props.price}</span> SEK

                <button className={"btn btn-primary"} 
                onClick= {this.onClickSaveToFirestore.bind(this)}>Boka</button>            </div>
        </div>


)
}
}
export default Card;