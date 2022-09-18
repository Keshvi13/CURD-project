import { useEffect, useState,} from "react";
   
export default function Json_formate(){

    const [details, setDetails]=useState([]);

    useEffect(()=>{fetch("https://630e1d5db37c364eb7133650.mockapi.io/faclty")
   
    ////thapatechnical.github.io/userapi/users.6json//
  .then((res)=>{return res.json()})
   
  .then((res)=>{setDetails(res)})},[]);
    
  
let formeted_details = details.map((stu)=>{
  return(
          <>
            <br/>
            <card>
            <div class="card col-md-3" >
            <img src = {stu.img} class="card-img-top" alt=""/>
            <div class="card-body">
            <h1 class="card-title">{stu.facltyname}</h1>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>  
            </card>      
          </>                     
        );
});

return (
  <>
    {formeted_details}
  </>);
}
//https://codesandbox.io/u/er.arjunbala