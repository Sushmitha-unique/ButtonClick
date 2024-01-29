import React,{useState} from "react";

const Button = () =>{
    const [count,setcount] = useState(0)
 return(
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={()=>setcount(count+1)}>Click Me</button>
    </div>
 )
}
export default Button;