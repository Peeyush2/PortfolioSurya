import React,{useEffect,useState} from 'react'

export default function Carasoul(props) {
    const [idx,setIdx] = useState(0)
    const [len,setLen] = useState(0)
    useEffect(()=>{
    console.log(props.props!=undefined)
    if(props.props!=undefined){
       if(props.props.length==0) setIdx(-1)
       setLen(props.props.length);
    }
    })
    function nextHandle(){
        if((idx+1)<len){
            setIdx(prev=>prev+1)
        }
    }
    function prevHandle(){
        if((idx-1)>=0){
            setIdx(prev=>prev-1)
        }
    }
    if(len>0)
    return (
        <div>
            <div className='imageContainer'>
                {props.props.map((component,index)=>(
                   idx===index && 
                   <div>
                    {idx!==0 && <div 
                        onClick={()=>prevHandle() }
                        style={{float:'left', height:'100%'}}>
                            Prev
                        </div>}
                    {idx==0 && <div 
                    style={{visibility:'hidden',float:'left',height:'100%'}}>
                        Prev
                        </div>}
                    {<img style={{float:'left'}} key= {index} src = {component.img}/>}
                    {idx!==len-1 && <div onClick={()=>nextHandle()}style={{float:'left', height:'30em'}}>Next</div>}
                    </div>
                ))}
           </div>
           <div>
           </div>
        </div>
    )
    else{
        return(
            <div>Nothing to Show</div>
        )
    }
}