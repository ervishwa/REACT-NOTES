import { useState } from "react"

const Child = ({name,HandelchildinputChng})=>{

    // const[prof,setProf] = useState(name);


   

    const HandelInputChange = (e)=>{
        // setProf(e.target.value);
        HandelchildinputChng(e.target.value);
    }

    return (
        <>
        <h3>child input:</h3>
        <input type="text" name="prof" value={name} onChange={HandelInputChange}></input>
        </>
    )
}
export default Child;


//if i write anything on child input field it should be reflected in parent input field also.
//how to call setter function of parent on change of child input?(its only possible by parent setter fun)
//child sa information transfer ho rha ha parent ma by help of by sending callback function as 
//a prop...or call back fun parent ka setter function ha..
//ab mereko esko thoda or optimized karna ha...2-2 setter fun ki jarurat nhi apna ko ek sa 
//bhi kaam hojaega..
//child become now stateless component.
