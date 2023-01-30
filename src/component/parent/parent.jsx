import { useState } from "react";
import Child from "../child/child";

const Parent = ()=>{


    const[name,setName] = useState("");

    // const HandelNameChange = (e)=>{
    //   setName(e.target.value);
    // }

    return (
     <> 
     <h1>parent name:</h1> 
     <input type="text" name="name" value={name} ></input>
     <Child name={name} HandelchildinputChng={setName}></Child>
     </> 
    )
}
export default Parent;