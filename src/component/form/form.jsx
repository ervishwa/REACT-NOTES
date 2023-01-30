import { useState } from "react";
const Form = ()=>{

    let[userName,setUserName] = useState("vishnu");
    
    //we r changing a uncontrol component to control one..by using handler fun.
    const ManageuserNameChange = (event)=>{
     setUserName(event.target.value);
    }

    const MangeSubmit = (event)=>{
     console.log(event);
     event.preventDefault();
    }

    return (
        <form onSubmit={MangeSubmit}>
            <label>Enter name:</label>
            <input type="text" name="username" id="username" value={userName} onChange={ManageuserNameChange}/>
            <input type="submit" name="submit" id="submit"></input>
        </form>
    )
}

export default Form;