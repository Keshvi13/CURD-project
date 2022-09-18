import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Faclties(){
   const[details,setDetails]=useState([]);

useEffect(()=>{
    fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty")
    .then((res)=>{return res.json()})
    .then((res)=>{setDetails(res)})
},[])

const forsmeted_detail=details.map((fac)=>{
    return(<>
       <div class="col-3">
        <img class="img-fluid" alt="a" src={fac.FacltyImage}/>
        <a class="dropdown-item" href={"../faclty/" +fac.id}>{fac.FacltyName}</a>
       </div>
    <br/>
    </>)
})

    return (<>
    <div class ="container">
      <div class="row">{forsmeted_detail}</div>
    </div>
    </>)
}