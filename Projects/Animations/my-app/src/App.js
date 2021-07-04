 import React,{useState,useEffect} from 'react';
 import img1 from './unnamed.png'
 import Followme from './Components/FollowMe/Followme'
 import Footer from './Components/Footer/Footer'

 import InputField from './Reusable Components/InputField.js/InputField'
 
 import luxia from './Luxia'
 import './App.css';
 
 import fire from './fire'
import About from './Components/About/About'
import FrontPage from './Components/FrontPage'
import Work from './Components/Work/Work'
import Work2 from './Components/Work2/Work2'
import Articles from './Components/Article/Article'
import Connectme from './Components/ConnectMe/Connectme'
import MessageMe from './Components/Routes/MessageMe/MessageMe2'

import Paint from './Components/Work/Ttcxpng.png'
import paintBack from './Components/Work/ttcx.svg'

import Iwg from './Components/Work/./iwgpng.png'
import Paint2Back from './Components/Work/iwg2.svg'


import Bhook from './Components/Work/Group 2260@2x.png'
import Bhookback from './Components/Work/bhook.svg'


import Tata from './Components/Work/Group 2270@2x.png'
import TataBack from './Components/Work/ttonco.svg'

import PreciousChair from './Components/Work/Group 2244@2x.png'
import PreciousBack from './Components/Work/PreciousBackGround.jpeg'

import Goonj from './Components/Work/goonj.png'
import GoonjBack from './Components/Work/goonj.svg'

import A1 from './Components/Article/1.png'
import A1Back from './Components/Article/1bg.png'
import A2 from './Components/Article/2.png'
import A2Back from './Components/Article/2bg.png'
import A3 from './Components/Article/3.png'
import A3Back from './Components/Article/3bg.png'
import A4 from './Components/Article/4.png'
import A4Back from './Components/Article/4bg.png'
import A5 from './Components/Article/5.png'
import A5Back from './Components/Article/5bg.png'
import A6 from './Components/Article/6.png'
import A6Back from './Components/Article/6bg.png'
import A7 from './Components/Article/7.png'
import A7Back from './Components/Article/7bg.png'
import A8 from './Components/Article/8.png'
import A8Back from './Components/Article/8bg.png'
import A9 from './Components/Article/9.png'
import A9Back from './Components/Article/9bg.png'
import A10 from './Components/Article/10.png'
import A10Back from './Components/Article/10bg.png'

import GImg1 from './Components/Gallery/Image1.jpeg'
import GImg2 from './Components/Gallery/Image2.jpeg'
import GImg3 from './Components/Gallery/Image3.jpg'
import GImg4 from './Components/Gallery/Image4.jpg'

import Card from './Components/Card/Card'

import {Switch, route, Link} from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import back from './back.jpg'

function App() {
const [point,setPoint] = useState({x:3.759,y:3.579})
const [img,setImg] = useState(
  [  {imgUrl:Paint,i:0, imgBack:paintBack},
    {imgUrl:Iwg,imgBack:Paint2Back,i:1},
    {imgUrl:PreciousChair,imgBack:PreciousBack,i:2},
    {imgUrl:Tata,imgBack:TataBack,i:3},
    {imgUrl:Bhook,imgBack:Bhookback,i:4},
    {imgUrl:Goonj,imgBack:GoonjBack,i:5}]
)

const [img3,setImg3] = useState(
  [  {imgUrl:GImg2,i:0, imgBack:GImg2},
    {imgUrl:GImg1,imgBack:GImg1,i:1},
    {imgUrl:GImg3,imgBack:GImg3,i:1},
    {imgUrl:GImg4,imgBack:GImg4,i:1},
  ]
)

const [img2,setImg2] = useState(
  [
    {imgUrl:A1,i:0, imgBack:A1Back},
    {imgUrl:A2,i:1, imgBack:A2Back},
    {imgUrl:A3,i:2, imgBack:A3Back},
    {imgUrl:A4,i:3, imgBack:A4Back},
    {imgUrl:A5,i:4, imgBack:A5Back},
    {imgUrl:A6,i:5, imgBack:A6Back},
    {imgUrl:A7,i:6, imgBack:A7Back},
    {imgUrl:A8,i:7, imgBack:A8Back},
    {imgUrl:A9,i:8, imgBack:A9Back},
    {imgUrl:A10,i:9, imgBack:A10Back}
  ]
)
const [cvUrl,setcvUrl] = useState("")
const [text1 , setText1] = useState("")
const [text2 , setText2] = useState("")
useEffect(()=>{
  const cv = fire.storage().ref().child('CV/surya-gupta-ux-design.pdf');
  const resume = cv.getDownloadURL().then((url)=>{
    console.log(url)
    setcvUrl(url)
  })
  setText1("Hi I am Peeyush")
  setText2("Hi I am Gauri")
return{

}
},[])

  return (
  
    <div style={{fontFamily:luxia}} className="App"  onMouseMove={e=>{setPoint({x:e.nativeEvent.screenX,y:e.nativeEvent.screenY})}}>
        <section id="frontPage">
          <FrontPage/>
        </section>
        <section id="about">
          <About props={point} />
        </section>
        <a style={{textDecoration:'none'}} target="_blank" href={cvUrl} download className="about-download">
                        <span ><div className="about-download-innerDiv"><a style={{textDecoration:'none'}} target="_blank" href={cvUrl} download>Download Resume</a></div></span>
        </a>
        <section style={{color:'white',textAlign:'center',padding:'10%',fontSize:'400%'}}>
          The work is under progress for the website! Please feel free to explore.
        </section> .
        <section id="work" style={{color:'white'}}> 
          <Work2 props={img} imgBorder="none" bckSize="cover" name="Work" des1="Sharing few of my" des2="experiences &" des3="milestones" type="600%"/>
        </section>
       
        <section id="gallery">
          <Work2 props={img3} bckSize="cover" imgBorder="white solid 10px" name="Gallery" des1="Drawing inspiration from things around you is easy, when you observe, explore and listen." des2="" des3="" type="600%"/>
        </section>
        <section id="articles" style={{color:'white'}}> 
          <Work2 props={img2} imgBorder="none" bckSize="cover" name="Articles & Blogs" des1="Just open thoughts about" des2="designs we see around" des3="" type="500%"/>
        </section>
        <section id="connectme">
          <Connectme/>
        </section>
         {/* <section id="card"  style={{backgroundImage:`url(${back})`,display:'flex'}}> 
         
          <Card cardHeading="And it's done!" work="Development Work" idx="1" txt = {text1} buttonColor="#c8e4fb"/>
          <Card cardHeading="Feels awesome!" work="Graphic Designing" idx="2" txt= {text2} buttonColor="#f7aba1"/>
         
          
        </section>  */}
        <section style={{height:'100vh'}}>
          <Followme/>
        </section>
        <section>
          <Footer/>
        </section>
    </div> 
 
    
  );
}

export default App;
