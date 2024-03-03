import React from "react";
import '../assets/styles/Card.css'
import '../assets/styles/Skills.css'
import inforamtionArray from "../assets/information.jsx";
import skillsArray from "../assets/skills.jsx";
import Information from "./Information";
import Skill from './Skills.jsx'

function createGeneralInformation(pieceOfInformation){
    return <>
        <div className="information-container">
            <Information
                key = {pieceOfInformation.key}
                info = {pieceOfInformation.info}
                data = {pieceOfInformation.data}
            />
        </div>
    </>
}

function createSkills(skillInfo, index){
    return <Skill
                key = {skillInfo.key}
                skill = {skillInfo.skill}
                percentile = {skillInfo.percentile}
                index = {index}
            />
}

function Card(){
    return <>
        <div className="container-container">
            <div className='card-container'>
                <h2>General Information</h2>
                {inforamtionArray.map(createGeneralInformation)}
            </div>
        </div>
        <div className="container-container">
        <div className='card-container'>
            <h2>Skills</h2>
            {skillsArray.map(createSkills)}
        </div>
    </div>
    </>
}

export default Card