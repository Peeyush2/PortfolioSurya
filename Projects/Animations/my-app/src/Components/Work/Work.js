import React,{useState,useEffect} from 'react'
import lucia from './../../Luxia'
import paint from './paint1.jpg'
import paint2 from './paint2.jpg'
import paint3 from './paint3.jpeg'
import paint4 from './paint4.jpg'
import paint5 from './paint5.jpeg'
import background from './background'

export default function Work() {
const [imgs,setImg] = useState([paint3,paint2,paint,paint4,paint5])
const [idx,setIdx] = useState(0)
const [left,setLeft]= useState(0)
function BundleCards(){
    setIdx(prev=>prev-1)
    setLeft(prev=>prev-16)
}
return(
    
    <>
{imgs.map((img,index)=>
    idx===index && (
        <div className='work ' 
        style={{
              backgroundImage:`url(${img})`
            
            
        }}>
            <div className="blur">
            <div className='work-container'>
            <div className='work-headingsdiv' style={{flex:1}}>
                <div className='work-heading' style={{
                    fontSize:'100px',
                    paddingBottom:'15px'
                }}>
                    Work
                </div>
                    <div className='work-heading2'>
                        <span>Sharing few of my</span>
                        <br/>
                        <span>experiences &</span>
                        <br/>
                        <span>milestones</span>
                    </div>
                    <div className='restImages' >
                        {imgs.map((img2,index2)=>(
                            <>
                            {idx>index2 && <img className='restImages-img' onClick={()=>{BundleCards()}} style={{
                                left:{left}
                            }} src={img2}></img>}
                            </>
                        ))}
                    </div>
                </div>
            <div className='cards'>
                  <div className="cards-container" >
                    <div className="cards-main">
                    <img id={index} src = {img} />
                    <div className="cards-title">
                        <span>Tata Trust</span>
                    </div>
                  </div>
                    <img className="cardsimg-next" onClick={()=>{setIdx(prev=>prev+1)}} className='next-image' id={index+1} src={imgs[index+1]} 
                        style={{
                            float:'right',
                            // objectFit:'none',
                            position:'absolute',
                            right:'0px',
                            maxWidth:'15%',
                            overflow:'hidden',
                            paddingRight:'0px'
                            
                            
                        }}
                    >
                        
                    </img>
                  </div>
            </div>
        </div>
        </div>
        </div>
    ))
}
</>
)}
