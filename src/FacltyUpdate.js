import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacltyUpdate(){
    const navigate=useNavigate();
    const params=useParams();
    const [data,setData]=useState({});


    useEffect(()=>{
        fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty/"+ params.id,{
            method:"GET"
        }
        )
         .then((res)=>{return res.json()})
         .then((res)=>{setData(res)})
    },[])


    return(<>
   <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyName </span>
  <input value={data.FacltyName} onChange={(e)=>{setData({...data, FacltyName: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyImage </span>
  <input value={data.FacltyImage} onChange={(e)=>{setData({...data, FacltyImage: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyEmail </span>
  <input value={data.FacltyEmail} onChange={(e)=>{setData({...data, FacltyEmail: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyMobile </span>
  <input value={data.FacltyMobile} onChange={(e)=>{setData({...data, FacltyMobile: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
 

        <tr>
        <td colSpan="3">
          <br/>
          <button onClick={()=>{
            fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty/"+params.id,
            {
            method:"PUT",
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"}
            })

        .then((res)=>{
            navigate("/faclties");
        }) }}>
            
        update FACLUTY
         </button>
         </td>
        </tr>
       
    </>)
}