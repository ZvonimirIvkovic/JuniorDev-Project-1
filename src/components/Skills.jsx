import React, {useState, useEffect} from "react";
import '../assets/styles/Card.css'
import '../assets/styles/Skills.css'

function Skill({skill, percentile}){

    return <div className="skill">
                <p>{skill}</p>
                <div className="loading-bar">
                    <div className="progress-bar" style={{ width: `${percentile}` }}>
                        <p className="percentiles">{percentile}</p>
                    </div>
                </div>
            </div>
}

export default Skill