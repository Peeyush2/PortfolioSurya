import React,{useState,useEffect} from 'react'
import './MessageMe.css'
import InputField from '../../../Reusable Components/InputField.js/InputField'

export default function MessageMe() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [otpGen, setotpGen] = useState(Math.floor(Math.random()*10000))
    const [otp,setotp] = useState('')
    const [phNum,setphnum] = useState('')
    const [message,setmessage] = useState('')
    const [sendingParam,setsendingparam] = useState('')
    const [req,setreq] = useState('0')
    const [vis,setvis] = useState(false)
    const [idx,setIdx] = useState(0)
    const [error,setError] = useState('')
    useEffect(()=>{
        if(error){
            //alert("error")
        }
    },[error])
    const handleOnSend = ()=>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && name.trim().length!=0){
            setsendingparam(updateVals(email,otpGen,req));
            setIdx(prev=>prev+1)
        }
        else{
            alert('Please fill details correctly')
        }
    }
    return (
        <div className="App MessageMe">
            <div className="MessageMe-container">
                    {idx==0 && <div className="MessageMe-Form">
                        Fill in the Details
                        <br/><InputField value={name} onChange={(e)=>setname(e.target.value)} placeholder="Name"/>
                        <br/><InputField value={email} onChange={(e)=>setemail(e.target.value)} placeholder="email"/>
                        <button onClick={()=>{handleOnSend()}}>
                            Send
                        </button>
                    </div>}
                    {idx==1 && <div className="MessageMe-Form">
                        I have sent an OTP on your given Mail!! Please enter the OTP!!
                        <br/><InputField value={otp} onChange={(e)=>otpChange(e.target.value,otp,setotp,otpGen,setError)} placeholder="OTP"/>
                        {otp==otpGen &&<button onClick={()=>{setIdx(prev=>prev+1)}}>
                            OTP Correct
                        </button>}
                        {!(otp==otpGen)&& otp.length!=0 && <div>OTP Not Matching</div>}
                    </div>}
                    {idx==2 && otp==otpGen && <div className="MessageMe-Form">
                        Please leave a message
                        <br/><input value={message} onChange={(e)=>setmessage(e.target.value)} placeholder="Message"/>
                        <button onClick={()=>{setsendingparam(updateVals(email,message,"1"));setIdx(prev=>prev+1)}}>
                            Send Message
                        </button>
                    </div>}
                    {idx==3 && <div className="MessageMe-Form">
                        Thanks for the message!!
                    </div>}
                   { <iframe width="0%" height="0%" src={sendingParam} 
                    frameborder="0" allowfullscreen></iframe>}
            </div>
        </div>
    )
}
const otpChange = (val,otp,setotp,otpGen,setError)=>{
    setotp(val)
    checkOTP(otp,otpGen,setError)
}
const checkOTP = (value,otpGen,setError)=>{
    if(otpGen == value){
        setError(false)
    }
    else{
        setError(true)
    }
}
const updateVals = (email,otpGen,req) => {
    var params = {
    "ds0.email": email,
    "ds0.otp": otpGen,
    "ds0.req_type": req,
    "ds0.message": otpGen
     };
     console.log(otpGen)
    var paramsAsString = JSON.stringify(params);
    var encodedParams = encodeURIComponent(paramsAsString);
    return (
    "https://datastudio.google.com/embed/reporting/e829a95c-c84c-4bca-85fe-1dbe6bbaffe8/page/agCtB?params=" +
    encodedParams
     );
     }
