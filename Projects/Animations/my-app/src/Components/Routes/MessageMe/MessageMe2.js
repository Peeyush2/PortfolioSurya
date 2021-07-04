import React,{useState,useEffect,useFocus} from 'react'
import './MessageMe.css'
import '../../Navbar'
import InputField from '../../../Reusable Components/InputField.js/InputField'
import Navbar from '../../Navbar'
import thankyou from './thankyou.gif'
import firebase from './../../../fire'

export default function MessageMe2() {
    const [name, setName] = useState("")
    const [email,setEmail]= useState("")
    const [mobile,setMobile]= useState("")
    const [message,setMessage]= useState("")
    const [sendingParam, setsendingparam] = useState("")
    const [thank, setThank] = useState(false)
    const [share, setShare] = useState(false);
    useEffect(() => {
        console.log(share)
        const interval = setTimeout(()=>setShare(false), 3000);
        return () => {
            clearTimeout(interval);
        }
    }, [share])
    const validateAllFields=()=>{
        if(name.trim().length===0 && email.trim().length===0 && message.trim().length===0){
            return false
        }
        else if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
            return false
        }
        else if(!(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile))){
            return false
        }
        return true
    }
    const handleShare=()=>{
        navigator.clipboard.writeText("https://www.suryagupta.in");
        setShare(true)
    }
    const handleSubmit = ()=>{
        if(validateAllFields()){
            setsendingparam(updateVals(name,email,mobile,message))
            setThank(true);
        }else{
            alert("We know you can't wait to message us!! Please fill in all the details.")
        }
    }
    const updateVals = (name, email, mobile, message) => {
        var params = {
        "ds1.name": name,
        "ds1.email": email,
        "ds1.mobile": mobile,
        "ds1.message": message
         };
        var paramsAsString = JSON.stringify(params);
        var encodedParams = encodeURIComponent(paramsAsString);
        return (
        "https://datastudio.google.com/embed/reporting/31e54b72-0da4-4293-b45e-0f6a24737028/page/ySMyB?params=" +
        encodedParams
         );
    }
    return (
        <div className="MessageMeApp">
            <Navbar/>
        {!thank && <div className="MessageMe">
            <div className="MessageMe-Heading">
                <div className="MessageMe-Heading2">
                Drop me<br/> a line
                </div>
                <div className="MessageMe-Heading3">

                </div>
            </div>
            <div className="MessageMe-container">
            <div className="MessageMe-container2">
                <InputField type="Name"  isTextArea={false} name = {name} fun={setName} /> 
                <InputField type="Email" isTextArea={false} name = {email} fun={setEmail} handleEmail/>
                <InputField type="Mobile Number" isTextArea={false} name = {mobile} fun={setMobile}/>
                <InputField type="Message" isTextArea={true} name = {message} fun={setMessage}/>
                <div onClick={()=>handleSubmit()} className="MessageMe-Submit navbar-extra" style={{color:"white"}}> Submit </div>
                { <iframe width="0%" height="0%" src={sendingParam} 
                    frameborder="0" allowfullscreen></iframe>}
            </div>
            
            </div>
        </div>}
        {thank && <div className="MessageMeThankYou">
        <p>Thank you for your message!</p>
        {/* <iframe src="https://giphy.com/embed/l1AvAr5gPseh9RxOo" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
        <img className="thankImg" src={thankyou}></img>
        {!share && <p className="shareme" onClick={()=>{handleShare()}}>Share website</p>}
        {share && <p>Link copied to your clipboard!</p>}
                { <iframe width="0%" height="0%" src={sendingParam} 
                    frameborder="0" allowfullscreen></iframe>}
            </div>}
        </div>
    )
}
