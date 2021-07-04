import React,{useState,useEffect} from 'react'
import Logo2 from './Icons/list-white-18dp.js'
import Favicon from './../favicon'
import MenuPng from './Icons/menupng .png'
import PngLogo from './Icons/pnglogo .png'
import cancel from './Icons/close.js'
import {BrowserRouter as Router , useHistory} from 'react-router-dom'
import './navbar.css'
export default function Navbar() {
    const [visible,setVisible] = useState(false);
    const history = useHistory();
    return (
        <Router>
        <div>
        <div className='navbar2'>            
            <div className='navbar-list'>
                <div className='navbar-logo'>
                   <a href="/#frontPage"> <Favicon/> </a>
                </div>
            </div>
            <div className='navbar-list2'>
                <div className='navbar-menu'>
                    <div className="navbar-li"><a href="/#work" >Work</a></div>
                    <div className="navbar-li"><a href="/#about" >About</a></div>
                    <div className="navbar-li"><a href="/#gallery"  >Gallery</a></div>
                    <div className="navbar-li"><a href="/#articles">Articles</a></div>
                    <div className="navbar-li navbar-extra"><a href="/message">Message Me</a></div>
                </div>
                <div onClick={()=>setVisible(prev=>!prev)} className='compressed-navbar-menu'>
                        {!visible &&<div className="dontmakeCross"><Logo2/></div>}
                        { visible &&<div className="makeCross"> <Logo2/> </div>}
                </div>
            </div>
        </div>
        {visible && <div className='navbar-extended blur3'>
                    <div className="navbarEx-a"><a class="navbarEx-aa" href="/#work">Work</a></div>
                    <div className="navbarEx-a"><a class="navbarEx-aa" href="/#about">About</a></div>
                    <div className="navbarEx-a"><a class="navbarEx-aa" href="/#gallery">Gallery</a></div>
                    <div className="navbarEx-a"><a class="navbarEx-aa" href="/#articles">Articles</a></div>
        </div>}

        </div>
        </Router>
    )
}
