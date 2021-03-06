import React, { Component } from 'react';
import Modal from "react-modal";

const customStyles = {
  content : {
    background: "#e6e6e6",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 


export default class BookingForm extends Component {

    state = {
            name: "Ange ditt namn",
            appointmentTime: "till ex. 10.00",
            mobile: "x7x0000000"
        }


handleOnChange = (e)=>{
       this.setState({[e.target.name]: e.target.value})  
}

 handleOnSubmit(e){
        e.preventDefault()

        console.log("spara den i databasen")
        // ALLA värden som du får från användare ska sparas i databasen
    }
    render() {
        return (
            <div>
                <Modal 
          isOpen={this.props.openModal}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          contentLabel="Boking form" >
          <h2 >Booking form</h2>
          <button onClick={this.props.closeModal}>close</button>
          <div>Ange bookning information</div>

                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <input value={this.state.name} onChange={this.handleOnChange} type={"text"}   name={"name"}></input>
                    <input value={this.state.appointmentTime} onChange={this.handleOnChange} type={"text"}  name={"appointmentTime"}></input>
                    <input value={this.state.mobile}  onChange={this.handleOnChange} type={"number"}  name={"mobile"}></input>
                    <button onClick={this.props.closeModal}>Bekräfta</button>
                </form>
                 </Modal>
            </div>
           
        )
    }
}
 