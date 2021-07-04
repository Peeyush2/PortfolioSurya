import React from 'react'
import './Card.css'
import img1 from './Programming-amico.svg'
import img2 from './Designer-pana.svg'

import back from './nasa-NuE8Nu3otjo-unsplash.jpg'

function Card(props) {
    return (
        
        <div  className="card">
            <div className="card-container">
                <div className="card-container1">
                    <div  className="card-imageContainer">
                        {props.idx ==1 && <img src={img1}></img>}
                        {props.idx ==2 && <img src={img2}></img>}
                        
                    </div>  
                   
                </div>
                <div className="card-Heading">
                        {props.cardHeading}
                    </div>
                <div className="card-container2">
                    <div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    text of the printing and typesetting industry{props.txt}
                    </div>
                </div>
                <div className="card-container3" style={{backgroundColor:`${props.buttonColor}`}}>
                    Click for {props.work}
                </div>
            </div>
        </div>
        
    )
}

export default Card
