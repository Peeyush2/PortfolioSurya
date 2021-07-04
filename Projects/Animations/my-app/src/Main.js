import React,{useState,useEffect} from 'react'
import './Main.css'
import MainBody from './Main-Body'
import MainEnd from './Main-End'
export default function Main() {
    return (
        <div>
            <div>
                <div className="Main">
                    <div className="Main-heading">
                        Portfolio
                    </div>
                    <div className="Main-heading-two">
                    Jai Gupta
                     </div>
                    <MainBody/>
                    <br/>
                    {/* <MainEnd/> */}
                </div>

              
            </div>
        </div>
    )
}
