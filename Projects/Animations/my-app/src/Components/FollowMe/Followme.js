import React from "react";
import "./Followme.css";
import insta from "./instagram.svg";
import behance from "./behance.svg";
import dribble from "./dribble.svg";
import medium from "./Medium.svg";
import twitter from "./twitter.svg";
import linkedin from "./linkedin.svg";



function Followme() {
  const openProfile = (url)=>{
    console.log(url)
    window.open(url,"_blank");
  }
  return (
    <div className="Followme">
      <div className="Followme-blur-main">
        <div className="Followme-c1">
          <span>Follow me & my work on</span>
        </div>
        <div className="Followme-2">
          <div className="Followme-c bgcolor1">
            <div onClick={(e)=>{e.preventDefault();openProfile("https://www.behance.net/curious_")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={behance} alt="Behance Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/ curious_</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://media.giphy.com/media/dUNhmSxAKa7PIaPdlv/giphy.gif")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={dribble} alt="Dribble Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/ curious_</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://medium.com/@ImBetterEveryday")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={medium} alt="Medium Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/ suryagupta</a>
              </div>
            </div>
          </div>
          <div className="Followme-c  bgcolor2">
            <div onClick={(e)=>{e.preventDefault();openProfile("https://www.instagram.com/the_penseive/")}} className="Followme-d setDisplayNone">
              <div className="followme-icon">
                <img className="Logo" src={insta} alt="Insta Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/ the_penseive</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://www.instagram.com/_jaigupta/")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={insta} alt="Insta Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/ _jaigupta</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://www.instagram.com/thesimple.eunoia/")}} className="Followme-d setDisplayNone">
              
                <div className="followme-icon">
                 <img className="Logo" src={insta} alt="Insta Logo" />
                </div>
                
                <div className="followme-text">
                  <a href="#">/ thesimple.eunoia</a>
                </div>
              
            </div>
          </div>
          <div className="Followme-c  bgcolor3">
            <div onClick={(e)=>{e.preventDefault();openProfile("https://twitter.com/the_penseive")}} className="Followme-d setDisplayNone">
              <div className="followme-icon">
                <img className="Logo" src={twitter} alt="Twitter Logo" />
              </div>
              <div className="followme-text">
                <a href="#">@ jaigupta_</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://twitter.com/jaigupta_")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={twitter} alt="Twitter Logo" />
              </div>
              <div className="followme-text">
                <a href="#">@ the_penseive</a>
              </div>
            </div>
            <div onClick={(e)=>{e.preventDefault();openProfile("https://www.linkedin.com/in/surya-gupta/")}} className="Followme-d">
              <div className="followme-icon">
                <img className="Logo" src={linkedin} alt="Linked Logo" />
              </div>
              <div className="followme-text">
                <a href="#">/in/surya-gupta</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Followme;
