import React from "react";
import '../assets/styles/Card.css'
import '../assets/styles/Skills.css'

function Skill({skill, percentile, index}){
    return <div className="skill">
                <p>{skill}</p>
                <div class="loading-bar">
                    <div class="progress-bar">
                        <p className="percentiles">{
                            document.getElementsByClassName('progress-bar')[index].style.width = percentile
                        }</p>
                    </div>
                </div>
            </div>
}

export default Skill