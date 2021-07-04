import React,{useState,useEffect} from 'react'

export default function Home() {
    const [visible,setVisible] = useState({0:false,1:false,2:false,3:false});
    const [yaxis,setYaxis] = useState(0)
    const [images,setImages] = useState([
        {img:"http://juliecristobal.com/wp-content/uploads/2020/04/lookbook-e20-35.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/08web.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/20190318_Duel_HugoMapelli-WEB.jpg"},
        {img:"http://juliecristobal.com/wp-content/uploads/2019/05/FrankieandClo_CharlotteStouvenot_Monologue_09.jpg"}]);
    function handleMouseEnter(index){
            setVisible(prev=>[...false])
    }
    return (
        <div className="home">
            {images.map((image,index)=>(
            <div className='imageContainer'>
                {visible[index] && <div style={{
                    top:yaxis
                }} className='imageName'>{index} </div>}
                <img onPointerMove={e=>{setYaxis(e.pageY)}}
                onMouseEnter={()=>{setVisible({...visible,[index]:true})}}
                onMouseLeave={()=>{setVisible({...visible,[index]:false})}} 
                src={image.img}/>
            </div>))}   
        </div>
    )
}
