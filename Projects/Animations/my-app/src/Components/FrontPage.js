import React,{useState,useEffect} from 'react'
import Lamp from '../Lamp'
import Navbar from './Navbar'
import './frontpage.css'
import {useHistory} from 'react-router-dom'
export default function FrontPage() {
    const history = useHistory()
    return (
        <div>
            <Navbar/>
            <div>
            <div className='front-body' style={{minHeight:'100vh'}}>
                <div className='front-body-div '>
                    <div className='blur2'>
                    <div className='font-body-heading1'>
                        <div>Product Design
                        <br/>& Digital Arts</div>
                        <div className="connectButton"><div><a href="/message">Message Me</a></div> </div>
                    </div>
                    <hr className='frontPageHr'/>
                    <div className='font-body-heading2'>
                        <h1>Helping brands & businesses cut through
                        <br/>the clutter & reach right audience.</h1>
                    </div>
                    <hr className='frontPageHr'/>
                    
                 </div>   
                </div>
                <div className='lampClass'>
                    <Lamp/>
                </div>
                {/* <div class='shape'>
                    <div className='circle'>
                        
                    </div>
                </div> */}

            </div>
           </div>
        </div>
    )
}
