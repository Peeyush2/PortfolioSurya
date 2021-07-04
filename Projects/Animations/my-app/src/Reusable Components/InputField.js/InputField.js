import React,{useState,useEffect} from 'react'
import './InputField.css'
/* TODO: FontSize change according to textLength
*/
export default function InputField(props) {
    const [styl,setStyl] = useState(false)
    
    useEffect(() => {
        handleEmail(props.type,props.name)
        

    }, [props.name])
    const handleEmail = (name,val)=>{
        if(val.trim().length==0){
            setStyl(false)
        }
        else if(name==="Email"){
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val.trim()) && val.trim().length!=0){
                setStyl(false)
            }
            else setStyl(true)
        }else if(name === "Mobile Number"){
            if(!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(val.trim())))
                setStyl(true)
            else setStyl(false)
        }
    }
    if(props.type === "Name")
    return(
        <div className="InputField-container">
                <input autoFocus  type="search" onChange={(e)=>{props.fun(e.target.value)}} value={props.name}  autocomplete="off" type="search"  placeholder={props.type} className={`InputField-input`}/>
                {styl && <p style={{color:"red"}}>Email not correct</p>}
        </div>
    )
    if(!props.isTextArea)
    return (
        <div className="InputField-container">
                <input  type="search" onChange={(e)=>{props.fun(e.target.value)}} value={props.name}  autocomplete="off" type="search"  placeholder={props.type} className={`InputField-input`}/>
                {styl && <p style={{color:"red"}}>{props.type} not correct</p>}
        </div>
    )
    else
    return (
        <div className="InputField-container">
            <textarea rows="3" type="search" onChange={(e)=>{props.fun(e.target.value)}} placeholder={props.type} className="InputField-input"/>
        </div>
    )
}
