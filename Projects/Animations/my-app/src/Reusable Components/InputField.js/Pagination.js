import React,{useState,useEffect} from 'react'
import './Pagination.css'

export default function Pagination(props) {
    if(props.idx)
    return (
        <div onClick={()=>{props.set(props.idx2)}} className='Pagination-circle'>
        </div>
    )
    else
    return(
        <div onClick={()=>{props.set(props.idx2)}} className='Pagination-circle Pagination-color'>
        </div>
    )
}
