import React from "react";


const Card = (props) => {
    

    return (
        <div className={"cards"} style={{ width: "18rem" }}>
            <img src={props.image} className={"card-img-top"} alt={"Boka"} />
            <div className={"card-body"}>
                <h5 className={"card-title"}> {props.title}</h5>
                <p className={"card-text"}>{props.description} </p>
                Pris: <span>{props.price}</span> SEK

                <button className={"btn btn-primary"}>Boka</button>
            </div>
        </div>

    )
}

export default Card;