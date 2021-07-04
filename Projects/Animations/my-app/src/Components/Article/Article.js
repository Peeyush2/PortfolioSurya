import React,{useState,useEffect} from 'react'
import Paint from '../Work/Ttcxpng.png'
import paintBack from '../Work/ttcx.svg'

import Iwg from '../Work/./iwgpng.png'
import Paint2Back from '../Work/iwg2.svg'


import Bhook from '../Work/Group 2260@2x.png'
import Bhookback from '../Work/bhook.svg'
import './../Work2/Work2.css'

import Tata from '../Work/Group 2270@2x.png'
import TataBack from '../Work/ttonco.svg'

import PreciousChair from '../Work/Group 2244@2x.png'
import PreciousBack from '../Work/PreciousBackGround.jpeg'
//import PreciousBack from 
import Goonj from '../Work/goonj.png'
import GoonjBack from '../Work/goonj.svg'

import arrow from '../../arrow.svg'

export default function Articles() {
    const [imgs,setImgs] = useState([
        {imgUrl:Paint,i:0, imgBack:paintBack},
        {imgUrl:Iwg,imgBack:Paint2Back,i:1},
        {imgUrl:PreciousChair,imgBack:PreciousBack,i:2},
        {imgUrl:Tata,imgBack:TataBack,i:3},
        {imgUrl:Bhook,imgBack:Bhookback,i:4},
        {imgUrl:Goonj,imgBack:GoonjBack,i:5}
    ]);
        const [currentIdx,setCurrentIdx] = useState(0)
        const [ispointerDown,setisPointerDown] = useState(false)
        const [point,setPoint] = useState([])

    const handlePointDown = (e)=>{
        setisPointerDown(true);
        setPoint([e.pageX,e.pageY])
    }

    const handlePointerMove = (e)=>{
        if(ispointerDown){
            setisPointerDown(false)
            const diff = e.pageX-point[0];
            const diff2 = Math.abs(e.pageY - point[1]);
            if(diff2<Math.abs(diff)){
            if(diff<0) {
                if(currentIdx<(imgs.length-1))
                    setCurrentIdx(prev=>prev+1)
            }
            else if(diff>0) {
                if(currentIdx>0)
                    setCurrentIdx(prev=>prev-1)
            }
        }
        }
    }

    return (
        <>
        {
            imgs.map((img,index)=>
                index===currentIdx && (
                <div className="work2-Container" style={{backgroundImage:`url(${img.imgBack})`}}> 
                    <div className="blur">
                        <div className="paddingDiv">
                            <div className="work2-container1">
                                <div className="work2-heading">
                                    <h1>Articles</h1>
                                    <h2>Sharing few of my<br/> experiences &<br/> milestones</h2>
                                </div>
                                <div className="work2-restImages">
                                    {/* {currentIdx>0 && 
                                    <div onClick={()=>setCurrentIdx(prev=>prev-1)}>
                                         Previous
                                    </div>} */}  
                                    {imgs.map((img2,index2)=>(
                                        <>
                                        {currentIdx>index2 && 
                                        <div className="work2-resImagesSingleImageDiv">
                                        <img /*style={{marginTop:`${img2.i*2*-1}%`}}*/ onClick={()=>{setCurrentIdx(prev=>prev-1)}}
                                        src={img2.imgUrl}></img>
                                        </div>}
                                        </>
                                    ))}
                                </div>
                            </div>
                            <div className="work2-container2">
                                <div className="work2-mainImg-preDiv">
                                    <div className="work2-mainImg">
                                        <img onPointerUp={()=>setisPointerDown(false)} onPointerMove={e=>handlePointerMove(e)} onPointerDown={e=>handlePointDown(e)} src={img.imgUrl}></img>
                                        {/* <img.imgUrl/> */}
                                        {/* <div className="work2-container2CardDetail" style={{position:"relative",top:"-20%"}}>{img.Name}</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="work2-container3">
                                {currentIdx<imgs.length-1 &&<div style={{width:'100%',height:'50%',display:'flex',justifyContent:'center'}} >
                                        {/* <div style={{width:'100%',height:'100%'}} className='work2-nextImg'>
                                            
                                        </div> */}
                                        <img onClick={()=>setCurrentIdx(prev=>prev+1)} src={arrow}/>
                                    </div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
        )
}
