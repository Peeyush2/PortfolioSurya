import React,{useState,useEffect} from 'react'
import right from './../../chevron-right.svg'
import left from './../../chevron-left.svg'
import './Work2.css'

import Pagination from '../../Reusable Components/InputField.js/Pagination'


import arrow from '../../arrow.svg'

export default function Work2(props) {
    const [currentIdx,setCurrentIdx] = useState(0)
    const [ispointerDown,setisPointerDown] = useState(false)
    const [point,setPoint] = useState([])

    const [articleClass,setClass] = useState('articleClass')

    const handlePointDown = (e)=>{
        setisPointerDown(true);
        setPoint([e.pageX,e.pageY])
    }
    const handlePrev = ()=>{
        if(currentIdx===0){
            setCurrentIdx(props.props.length-1)
        }
        else{
            setCurrentIdx(currentIdx-1)
        }
    }
    const handlePointerMove = (e)=>{
        if(ispointerDown){
            setisPointerDown(false)
            const diff = e.pageX-point[0];
            const diff2 = Math.abs(e.pageY - point[1]);
            if(diff2<Math.abs(diff)){
            if(diff<0) {
                    setCurrentIdx(prev=>((prev+1)%props.props.length))
            }
            else if(diff>0) {
                if(currentIdx>0)
                    setCurrentIdx(prev=>prev-1)
                else if(currentIdx===0)
                    setCurrentIdx(props.props.length-1)
            }
        }
        }
    }

    return (
        <>
        {
            props.props.map((img,index)=>
                index===currentIdx && (
                <div className="work2-Container"  style={{backgroundImage:`url(${img.imgBack})`,backgroundSize:props.bckSize}}> 
                {console.log(props.bckSize)}
                    <div className="blur">
                        <div className="paddingDiv">
                            <div className="work2-container1">
                                <div className="work2-heading">
                                    <h1 style={{fontSize:props.type}}>{props.name}</h1>
                                    <h2>{props.des1}<br/> {props.des2} <br/> {props.des3}</h2>
                                </div>
                                <div className="work2-restImages">
                                    {/* {currentIdx>0 && 
                                    <div onClick={()=>setCurrentIdx(prev=>prev-1)}>
                                         Previous
                                    </div>} */}  
                                    {props.props.map((img2,index2)=>(
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
                                        <div onClick={()=>setCurrentIdx((currentIdx+1)%props.props.length)} style={{right:'0',margin:'-10px'}} className="work2-mobile-chev">
                                            <img src={right}></img>
                                        </div>
                                        <img onPointerUp={()=>setisPointerDown(false)} onPointerMove={e=>handlePointerMove(e)} onPointerDown={e=>handlePointDown(e)} src={img.imgUrl}></img>
                                        <div onClick={()=>handlePrev()} style={{left:'0',margin:'-10px'}} className="work2-mobile-chev">
                                        <img src={left}></img>
                                        </div>
                                        {/* <img.imgUrl/> */}
                                        {/* <div className="work2-container2CardDetail" style={{position:"relative",top:"-20%"}}>{img.Name}</div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="work2-container3">
                                {currentIdx<props.props.length-1 &&<div className="work2-arrowNext"  >
                                        {/* <div style={{width:'100%',height:'100%'}} className='work2-nextImg'>
                                            
                                        </div> */}
                                        <img onClick={()=>setCurrentIdx(prev=>prev+1)} src={arrow} />
                                    </div>}
                                    <div className="work2-pagination">
                                        {props.props.map((temp,index)=>(
                                            <>
                                            {console.log(index)}
                                            <Pagination idx={currentIdx==index} idx2={index} set={setCurrentIdx}/>
                                            </>
                                        ))}
                                        </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
        )
}
