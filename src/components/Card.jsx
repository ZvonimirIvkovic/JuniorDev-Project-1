import React from "react";
import '../assets/styles/Card.css'
import inforamtionArray from "../assets/information";
import Information from "./Information";

function createRow(pieceOfInformation){
    return <div className="information-container">
        <Information
            key = {pieceOfInformation.key}
            info = {pieceOfInformation.info}
            data = {pieceOfInformation.data}
        />
    </div>
}

function Card(){
    return <div className="container-container">
        <div className='card-container'>
            <h2>General Information</h2>
            {inforamtionArray.map(createRow)}
        </div>
    </div>
}

export default Card