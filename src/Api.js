import { useState,useEffect} from "react";
   
export default function Api(){

    const[details,setDetails]=useState([]);

    useEffect(()=>{fetch("https://jsonplaceholder.typicode.com/users")
   
      ////thapatechnical.github.io/userapi/users.json//
    .then((res)=>{return res.json()})
     
    .then((res)=>{console.log(res)})},[]);
  
let formeted_details = details.map((stu)=>{return(
                                                  <>
                                                  <br/>
                                                  <h1>name:{stu.name}</h1>
                                                  <h1>username:{stu.username}</h1>
                                                  <h1>website:{stu.website}</h1>
                                                  <h1>id:{stu.id} </h1>
                                                  <h1>phone:{stu.phone} </h1>
                                                  <h1>email:{stu.email}</h1> 
                                                  <h1>address street:{stu.address.street}</h1>             
                                                  <h1>address city:{stu.address.city}</h1> 
                                                  <h1>address suite:{stu.address.suite}</h1> 
                                                  <h1>address zipcode:{stu.address.zipcode}</h1>
                                                  <br/>
                                                  <br/>
                                                  </>                     
                      
                                                )}
                                 )
return (
    <>{formeted_details}
    </>)
}