import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
//import '../node_modules/bootstrap/dist/bootstrap.min.css';

export default function FacltyById(){
 
    let params=useParams();
    const navigate=useNavigate();

    const[Faclty,setFaclty]=useState({});
    
    useEffect(()=>{
        fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty/"+ params.id,
        {
            method:"GET"
        }
        )
         .then((res)=>{return res.json()})
         .then((res)=>{setFaclty(res)})
    },[])

return(
    <>
    <table>
    <div class="p-3 mb-2 bg-secondary text-white">
        <tr>
             <td >Name:</td>
             <td>{Faclty.FacltyName}</td>
        </tr>
        <tr>
            <td>img:</td> 
            <td><img src ={Faclty.FacltyImage} alt="abs"/></td>
        </tr>
        <tr>
            <td>mobile number:</td>
            <td>{Faclty.FacltyMobile}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>{Faclty.FacltyEmail}</td>
        </tr>
        <br/>
        <br/>
        </div>
        </table>
        
        <button type="button" class="btn btn-info" 
            onClick={()=>{fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty/"+ params.id,{
            method:"DELETE" })
            .then((res)=>{navigate("/faclties");}) }}>    
             DELETE
         </button>
         
        <button type="button" class="btn btn-warning" 
        onClick={()=>{navigate("/faclty/update/"+params.id) }}>
            UPDATE
        </button>
    </>
)
}