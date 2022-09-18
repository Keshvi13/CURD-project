import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default
function Facltycreate(){
    const navigate=useNavigate();
    const [data,setData]=useState({});

    return(<>

<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyName </span>
  <input onChange={(e)=>{setData({...data, FacltyName: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyImage </span>
  <input onChange={(e)=>{setData({...data, FacltyImage: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyEmail </span>
  <input onChange={(e)=>{setData({...data, FacltyEmail: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Enter FacltyMobile </span>
  <input onChange={(e)=>{setData({...data, FacltyMobile: e.target.value})
        }} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
        <tr>
          <td colSpan="3">
          <br/>
          <button onClick={()=>{
            fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty/",
            {
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type": "application/json"}
            })

        .then((res)=>{
            navigate("/faclties");
        }) }}>
            
         CREATE FACLUTY
         </button>
                </td>
        </tr>
        
    </>)
}