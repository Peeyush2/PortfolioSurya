import React,{useState,useEffect} from 'react'
import {history}  from 'react-dom'
import fire from '../../fire'
import "./Connectme.css"

export default function Connectme() {
    return (
        <div className="connectme">
            <div className="connectme-container">
                <div className = "connectme-heading">
                    <div className="connectme-heading1">Drop me <br/>a line</div>
                    <div className="connectme-heading2">
                       <div className="connectme-heading2Border">
                           <div><a style={{color:"white",textDecoration:"none"}} href="/message">
                                <div className="connectme-talkmeslow">Connect me quick,</div>
                                <div className="connectme-talkmeslow"> talk me slow!</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>Photo by FIONA ART</div>
                </div>
            </div>
        </div>
    )
}
