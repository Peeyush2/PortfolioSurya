import React,{useState,useEffect} from 'react'
import Face from './Face'
import './About.css'
import arrow from '../../next.svg'
export default function About(props) {
    const [idx,setIdx] = useState(0);
    const [className1, setClassName1] = useState('')
    useEffect(()=>{
        if(idx===0){

        }
    },[idx])
    return (
        <div className='about'>
            <div className='face-div'>
                <Face style={{maxHeight:'100%'}} props={props.props}/>
            </div>
            { idx===0 && <div className='about-content'>
                <div className="about-common about-space about-hi">
                    Hi there!
                </div>
                <div className="about-common about-im">I'm Surya</div>
                <div className="about-read-rest">
                    <div onClick={()=>{setIdx(prev=>prev+1);setClassName1('about-common-out')}} className='about-common about-readMore '>
                            <div className="about-readMoreDiv1">Read More</div>
                            <div className="about-readMoreDiv2"><img src={arrow}/></div>
                    </div>
                    <div className="about-common about-rest" >
                        <h2 className="about-des">A self taught, passionate,<br/>
                        & an intuitive designer.</h2>
                    </div>
                </div>
            </div>}
            {
                idx===1 && <div className='about-content'>
                <div className="about-common about-space about-hi about-observing">
                    I'm Observing!
                </div>
                <div className='about-des2'>
                <div style={{flexDirection:'row-reverse'}} onClick={()=>setIdx(prev=>prev-1)} className='about-common about-readMore'>
                        <div className="about-readMoreDiv1">Go<br/> Back</div>
                        <div style={{transform:'rotate(180deg)',display:'none'}}  className="about-readMoreDiv2"><img src={arrow}/></div>
                </div>
                <div className="about-common about-rest">
                    <div style={{fontSize:'20px',fontWeight:'600'}} className="about-des about-des-mobile">Surya, an enthusiast artist and designer hailed from the city of Kanpur, formerly known as Manchester of India. His love for fine art is peppered throughout with the inclusion of digital art forms such as ----. The people he works for are his audience that understands the subtle links or connections between ideas and reality. Inspired by the simple ways of life – playground rules, a herd of sheep to a --- spirits him to dream and inspire the pursuit of great ideas. </div><br/>
                </div>
                </div>
            </div>
            }
            
        </div>
    )
}
